from flask import Flask, request, jsonify
import os
from dotenv import load_dotenv
import json
import re
from datetime import datetime
import google.generativeai as genai
from models import db, User, UserForm, Allergy, UserAllergy, MealPlan, Meal, Ingredient, MealIngredient, GroceryItem
from flask_cors import CORS

def create_app():
    app = Flask(__name__)
    load_dotenv()
    
    app.config['SQLALCHEMY_DATABASE_URI'] = os.getenv('DATABASE_URL')
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
    CORS(app, resources={r"/*": {"origins": ["https://fgqhs80-anonymous-8081.exp.direct", "http://localhost:8081", "*"]}})
    db.init_app(app)
    
    with app.app_context():
        db.drop_all()  # Drop tables to ensure fresh schema
        db.create_all()
        print("Tables dropped and created successfully.")
    
    return app

app = create_app()

def generate_and_save_meal_plan(user_id):
    user = User.query.get(user_id)
    if not user:
        raise ValueError("User not found")
    
    user_form = user.user_form
    if not user_form:
        raise ValueError("User form not found")
    
    # Correctly access allergy_name through the allergy relationship
    allergies = [ua.allergy.allergy_name for ua in user.user_allergies]
    
    prompt = f"""
    Please generate a 7-day meal plan and grocery list based on the following user details:
    - Current weight: {user_form.current_weight} kg
    - Target weight: {user_form.target_weight} kg
    - Height: {user_form.height} cm
    - Activity frequency: {user_form.activity_frequency}
    - Allergies: {', '.join(allergies) if allergies else 'None'}
    
    Return only a valid JSON object with the following structure:
    {{
      "meal_plans": [
        {{
          "day": 1,
          "meals": [
            {{
              "meal_type": "breakfast",
              "name": "Oatmeal with Fruits",
              "ingredients": [
                {{"name": "Rolled Oats", "quantity": 50, "unit": "g"}},
                {{"name": "Banana", "quantity": 1, "unit": "piece"}}
              ]
            }},
            ...
          ]
        }},
        ...
      ],
      "grocery_list": [
        {{"name": "Rolled Oats", "quantity": 350, "unit": "g"}},
        {{"name": "Banana", "quantity": 7, "unit": "pieces"}},
        ...
      ]
    }}
    Do not include any text outside of the JSON object. The response must be a valid JSON object only.
    """
    
    genai.configure(api_key=os.getenv("GEMINI_API_KEY"))
    model = genai.GenerativeModel("gemini-1.5-flash")
    response = model.generate_content(prompt)
    ai_response = response.text
    print(f"AI Response: {ai_response}")  # Log the response
    
    # Extract JSON if necessary
    json_match = re.search(r'\{.*\}', ai_response, re.DOTALL)
    if json_match:
        json_str = json_match.group(0)
        try:
            meal_data = json.loads(json_str)
        except json.JSONDecodeError as e:
            print(f"JSON Decode Error after extraction: {e}")
            raise ValueError("Extracted AI response is not valid JSON")
    else:
        raise ValueError("No JSON object found in AI response")
    
    if 'meal_plans' not in meal_data or 'grocery_list' not in meal_data:
        raise ValueError("Invalid AI response structure")
    
    meal_plan = MealPlan(user_id=user_id, is_active=True)
    db.session.add(meal_plan)
    db.session.flush()
    
    for day_data in meal_data['meal_plans']:
        for meal_info in day_data['meals']:
            meal = Meal(
                meal_name=meal_info['name'],
                meal_type=meal_info['meal_type'],
                day=day_data['day'],
                meal_plan_id=meal_plan.meal_plan_id,
                created_at=datetime.utcnow(),
                updated_at=datetime.utcnow()
            )
            db.session.add(meal)
            db.session.flush()
            
            for ing in meal_info['ingredients']:
                ingredient = Ingredient.query.filter_by(ingredient_name=ing['name']).first()
                if not ingredient:
                    ingredient = Ingredient(
                        ingredient_name=ing['name'],
                        created_at=datetime.utcnow(),
                        updated_at=datetime.utcnow()
                    )
                    db.session.add(ingredient)
                    db.session.flush()
                
                meal_ingredient = MealIngredient(
                    meal_id=meal.meal_id,
                    ingredient_id=ingredient.ingredient_id,
                    quantity=ing['quantity'],
                    unit=ing['unit'],
                    created_at=datetime.utcnow(),
                    updated_at=datetime.utcnow()
                )
                db.session.add(meal_ingredient)
    
    for grocery in meal_data['grocery_list']:
        grocery_item = GroceryItem(
            name=grocery['name'],
            quantity=grocery['quantity'],
            unit=grocery['unit'],
            meal_plan_id=meal_plan.meal_plan_id,
            created_at=datetime.utcnow(),
            updated_at=datetime.utcnow()
        )
        db.session.add(grocery_item)
    
    db.session.commit()


@app.route('/chatbot', methods=['POST'])
def chatbot():
    try:
        data = request.get_json()
        user_input = data.get('userInput')
        clerk_user_id = data.get('clerk_user_id')  # Optional, to fetch user context
        
        if not user_input:
            return jsonify({"error": "Missing userInput field"}), 400

        # Configure Gemini AI
        genai.configure(api_key=os.getenv("GEMINI_API_KEY"))
        model = genai.GenerativeModel("gemini-1.5-flash")

        # Fetch user context if clerk_user_id is provided
        user_context = ""
        if clerk_user_id:
            user = User.query.filter_by(clerk_user_id=clerk_user_id).first()
            if user and user.user_form:
                user_form = user.user_form
                allergies = [ua.allergy.allergy_name for ua in user.user_allergies]
                user_context = f"""
                User details:
                - Current weight: {user_form.current_weight} kg
                - Target weight: {user_form.target_weight} kg
                - Height: {user_form.height} cm
                - Activity frequency: {user_form.activity_frequency}
                - Allergies: {', '.join(allergies) if allergies else 'None'}
                """

        # Construct prompt
        prompt = f"""
        You are GainAI, a meal planning assistant. Respond to the user's message: "{user_input}"
        {user_context}
        
        If the user asks for a recipe or meal suggestion, return a JSON object with the following structure:
        {{
          "name": "Recipe Name",
          "prepTime": "30 minutes",
          "difficulty": "Easy",
          "tags": ["Vegan", "Quick"]
        }}
        
        For general conversation or if no recipe is requested, return a plain text response in Turkish.
        If appropriate, include a JSON array of up to 3 response options for the user to select, like:
        {{
          "text": "Your response text here",
          "options": ["Option 1", "Option 2", "Option 3"]
        }}
        
        Return only the JSON object or plain text response. Do not include markdown or extra text.
        """
        
        response = model.generate_content(
            prompt,
            generation_config={"response_mime_type": "application/json"}
        )
        ai_response = response.text
        print(f"AI Response: {ai_response}")

        # Try to parse as JSON
        try:
            response_data = json.loads(ai_response)
            return jsonify(response_data), 200
        except json.JSONDecodeError:
            # If not JSON, return as plain text
            return jsonify({"text": ai_response}), 200

    except Exception as e:
        print(f"Error in chatbot: {e}")
        return jsonify({"text": "Bağlantı hatası. Lütfen daha sonra tekrar deneyin."}), 500

@app.route('/saveUserMealPlanForm', methods=['POST'])
def save_user_meal_plan_form():
    try:
        data = request.get_json()
        
        required_fields = ['user', 'form', 'allergies']
        for field in required_fields:
            if field not in data:
                return jsonify({"error": f"Missing required field: {field}"}), 400

        with db.session.begin_nested():
            user_data = data['user']
            clerk_user_id = user_data.get('clerk_user_id')
            
            if not clerk_user_id:
                return jsonify({"error": "clerk_user_id is required"}), 400

            user = User.query.filter_by(clerk_user_id=clerk_user_id).first()
            if not user:
                user = User(
                    name=user_data['name'],
                    age=user_data.get('age'),
                    gender=user_data.get('gender'),
                    clerk_user_id=clerk_user_id,
                    created_at=datetime.utcnow(),
                    updated_at=datetime.utcnow()
                )
                db.session.add(user)
                db.session.flush()

            form_data = data['form']
            user_form = UserForm.query.filter_by(user_id=user.id).first()
            if user_form:
                user_form.current_weight = form_data['current_weight']
                user_form.target_weight = form_data['target_weight']
                user_form.height = form_data['height']
                user_form.activity_frequency = form_data['activity_frequency']
                user_form.updated_at = datetime.utcnow()
            else:
                user_form = UserForm(
                    user_id=user.id,
                    current_weight=form_data['current_weight'],
                    target_weight=form_data['target_weight'],
                    height=form_data['height'],
                    activity_frequency=form_data['activity_frequency'],
                    created_at=datetime.utcnow(),
                    updated_at=datetime.utcnow()
                )
                db.session.add(user_form)

            current_allergies = {ua.allergy.allergy_name for ua in user.user_allergies}
            submitted_allergies = set(data['allergies'])

            for allergy_name in submitted_allergies - current_allergies:
                allergy = Allergy.query.filter_by(allergy_name=allergy_name).first()
                if not allergy:
                    allergy = Allergy(
                        allergy_name=allergy_name,
                        created_at=datetime.utcnow(),
                        updated_at=datetime.utcnow()
                    )
                    db.session.add(allergy)
                    db.session.flush()
                
                user_allergy = UserAllergy(
                    user_id=user.id,
                    allergy_id=allergy.allergy_id,
                    created_at=datetime.utcnow(),
                    updated_at=datetime.utcnow()
                )
                db.session.add(user_allergy)

            for allergy_name in current_allergies - submitted_allergies:
                allergy = Allergy.query.filter_by(allergy_name=allergy_name).first()
                if allergy:
                    UserAllergy.query.filter_by(
                        user_id=user.id, 
                        allergy_id=allergy.allergy_id
                    ).delete()

        db.session.commit()
        
        try:
            generate_and_save_meal_plan(user.id)
            return jsonify({
                "message": "User data and meal plan saved successfully",
                "user_id": user.id,
                "form_id": user_form.user_form_id
            }), 200
        except Exception as e:
            print(f"Error generating meal plan: {e}")
            return jsonify({
                "message": "User data saved, but meal plan generation failed",
                "user_id": user.id,
                "form_id": user_form.user_form_id,
                "error": str(e)
            }), 200

    except Exception as e:
        db.session.rollback()
        print(f"Error saving user data: {e}")
        return jsonify({"error": str(e)}), 500

@app.route('/createMealPlan', methods=['POST'])
def create_meal_plan():
    return jsonify({"message": "Meal plan created successfully!"}), 200

@app.route('/ali')
def ali():
    return 'Hello, Ali!'

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)