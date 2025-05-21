from flask_sqlalchemy import SQLAlchemy
from datetime import datetime
import uuid

db = SQLAlchemy()

def generate_uuid():
    return str(uuid.uuid4())

class User(db.Model):
    __tablename__ = 'users'
    
    id = db.Column(db.String(36), primary_key=True, default=generate_uuid)
    name = db.Column(db.String(100), nullable=False)
    age = db.Column(db.Integer, nullable=True)
    gender = db.Column(db.String(10), nullable=True)
    clerk_user_id = db.Column(db.String(255), unique=True, nullable=False)
    created_at = db.Column(db.DateTime(), default=datetime.utcnow)
    updated_at = db.Column(db.DateTime(), default=datetime.utcnow, onupdate=datetime.utcnow)
    
    user_form = db.relationship('UserForm', backref='user', uselist=False, cascade='all, delete-orphan')
    user_allergies = db.relationship('UserAllergy', backref='user', lazy=True, cascade='all, delete-orphan')
    meal_plans = db.relationship('MealPlan', backref='user', lazy=True, cascade='all, delete-orphan')

class UserForm(db.Model):
    __tablename__ = 'user_forms'
    
    user_form_id = db.Column(db.String(36), primary_key=True, default=generate_uuid)
    user_id = db.Column(db.String(36), db.ForeignKey('users.id', ondelete='CASCADE'), unique=True, nullable=False)
    current_weight = db.Column(db.Float(), nullable=False)
    target_weight = db.Column(db.Float(), nullable=False)
    height = db.Column(db.Float(), nullable=False)
    activity_frequency = db.Column(db.String(50), nullable=False)
    created_at = db.Column(db.DateTime(), default=datetime.utcnow)
    updated_at = db.Column(db.DateTime(), default=datetime.utcnow, onupdate=datetime.utcnow)

class Allergy(db.Model):
    __tablename__ = 'allergies'
    
    allergy_id = db.Column(db.String(36), primary_key=True, default=generate_uuid)
    allergy_name = db.Column(db.String(100), unique=True, nullable=False)
    created_at = db.Column(db.DateTime(), default=datetime.utcnow)
    updated_at = db.Column(db.DateTime(), default=datetime.utcnow, onupdate=datetime.utcnow)
    
    user_allergies = db.relationship('UserAllergy', backref='allergy', lazy=True, cascade='all, delete-orphan')

class UserAllergy(db.Model):
    __tablename__ = 'user_allergies'
    
    user_allergy_id = db.Column(db.String(36), primary_key=True, default=generate_uuid)
    user_id = db.Column(db.String(36), db.ForeignKey('users.id', ondelete='CASCADE'), nullable=False)
    allergy_id = db.Column(db.String(36), db.ForeignKey('allergies.allergy_id', ondelete='CASCADE'), nullable=False)
    created_at = db.Column(db.DateTime(), default=datetime.utcnow)
    updated_at = db.Column(db.DateTime(), default=datetime.utcnow, onupdate=datetime.utcnow)
    
    __table_args__ = (db.UniqueConstraint('user_id', 'allergy_id', name='unique_user_allergy'),)

class MealPlan(db.Model):
    __tablename__ = 'meal_plans'
    
    meal_plan_id = db.Column(db.String(36), primary_key=True, default=generate_uuid)
    user_id = db.Column(db.String(36), db.ForeignKey('users.id', ondelete='CASCADE'), nullable=False)
    is_active = db.Column(db.Boolean(), default=True)
    created_at = db.Column(db.DateTime(), default=datetime.utcnow)
    updated_at = db.Column(db.DateTime(), default=datetime.utcnow, onupdate=datetime.utcnow)
    
    meals = db.relationship('Meal', backref='meal_plan', lazy=True, cascade='all, delete-orphan')
    grocery_items = db.relationship('GroceryItem', backref='meal_plan', lazy=True, cascade='all, delete-orphan')

class Meal(db.Model):
    __tablename__ = 'meals'
    
    meal_id = db.Column(db.String(36), primary_key=True, default=generate_uuid)
    meal_name = db.Column(db.String(100), nullable=False)
    meal_type = db.Column(db.String(50), nullable=False)  # e.g., breakfast, lunch
    day = db.Column(db.Integer, nullable=False)  # day of the meal plan
    meal_plan_id = db.Column(db.String(36), db.ForeignKey('meal_plans.meal_plan_id', ondelete='CASCADE'), nullable=False)
    created_at = db.Column(db.DateTime(), default=datetime.utcnow)
    updated_at = db.Column(db.DateTime(), default=datetime.utcnow, onupdate=datetime.utcnow)
    
    ingredients = db.relationship('MealIngredient', backref='meal', lazy=True, cascade='all, delete-orphan')

class Ingredient(db.Model):
    __tablename__ = 'ingredients'
    
    ingredient_id = db.Column(db.String(36), primary_key=True, default=generate_uuid)
    ingredient_name = db.Column(db.String(100), unique=True, nullable=False)
    calories_per_100 = db.Column(db.Float(), nullable=True)
    protein_per_100 = db.Column(db.Float(), nullable=True)
    fat_per_100 = db.Column(db.Float(), nullable=True)
    carb_per_100 = db.Column(db.Float(), nullable=True)
    created_at = db.Column(db.DateTime(), default=datetime.utcnow)
    updated_at = db.Column(db.DateTime(), default=datetime.utcnow, onupdate=datetime.utcnow)
    
    meal_ingredients = db.relationship('MealIngredient', backref='ingredient', lazy=True, cascade='all, delete-orphan')

class MealIngredient(db.Model):
    __tablename__ = 'meal_ingredients'
    
    meal_ingredient_id = db.Column(db.String(36), primary_key=True, default=generate_uuid)
    meal_id = db.Column(db.String(36), db.ForeignKey('meals.meal_id', ondelete='CASCADE'), nullable=False)
    ingredient_id = db.Column(db.String(36), db.ForeignKey('ingredients.ingredient_id', ondelete='CASCADE'), nullable=False)
    quantity = db.Column(db.Float(), nullable=False)
    unit = db.Column(db.String(20), nullable=False)
    created_at = db.Column(db.DateTime(), default=datetime.utcnow)
    updated_at = db.Column(db.DateTime(), default=datetime.utcnow, onupdate=datetime.utcnow)
    
    __table_args__ = (db.UniqueConstraint('meal_id', 'ingredient_id', name='unique_meal_ingredient'),)

class GroceryItem(db.Model):
    __tablename__ = 'grocery_items'
    
    grocery_item_id = db.Column(db.String(36), primary_key=True, default=generate_uuid)
    name = db.Column(db.String(100), nullable=False)
    quantity = db.Column(db.Float(), nullable=False)
    unit = db.Column(db.String(20), nullable=False)
    meal_plan_id = db.Column(db.String(36), db.ForeignKey('meal_plans.meal_plan_id', ondelete='CASCADE'), nullable=False)
    created_at = db.Column(db.DateTime(), default=datetime.utcnow)
    updated_at = db.Column(db.DateTime(), default=datetime.utcnow, onupdate=datetime.utcnow)