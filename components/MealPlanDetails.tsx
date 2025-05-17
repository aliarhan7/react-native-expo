import React, { useState } from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, ScrollView, Image } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../App';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

type MealPlanDetailsNavigationProp = NativeStackNavigationProp<RootStackParamList, 'MealPlanDetails'>;

// Expanded dummy data
const MEAL_PLAN_DETAILS = {
  '1': {
    id: '1',
    name: 'Weight Loss Plan',
    duration: '4 weeks',
    calories: 1800,
    description: 'A balanced plan focused on healthy weight loss through portion control and nutrient-dense foods.',
    progress: 65,
    image: 'salad',
    macros: {
      protein: 30,
      carbs: 40,
      fats: 30
    },
    schedule: {
      'Monday': {
        breakfast: 'Greek yogurt with berries',
        lunch: 'Grilled chicken salad',
        dinner: 'Salmon with quinoa',
        snacks: ['Apple', 'Almonds']
      },
      'Tuesday': {
        breakfast: 'Oatmeal with banana',
        lunch: 'Turkey wrap',
        dinner: 'Vegetable stir-fry',
        snacks: ['Protein shake']
      }
    },
    groceryList: [
      'Chicken breast',
      'Salmon fillets',
      'Greek yogurt',
      'Mixed berries',
      'Quinoa',
      'Almonds'
    ]
  },
  '2': {
    id: '1',
    name: 'Weight Loss Plan',
    duration: '4 weeks',
    calories: 1800,
    description: 'A balanced plan focused on healthy weight loss through portion control and nutrient-dense foods.',
    progress: 65,
    image: 'salad',
    macros: {
      protein: 30,
      carbs: 40,
      fats: 30
    },
    schedule: {
      'Monday': {
        breakfast: 'Greek yogurt with berries',
        lunch: 'Grilled chicken salad',
        dinner: 'Salmon with quinoa',
        snacks: ['Apple', 'Almonds']
      },
      'Tuesday': {
        breakfast: 'Oatmeal with banana',
        lunch: 'Turkey wrap',
        dinner: 'Vegetable stir-fry',
        snacks: ['Protein shake']
      }
    },
    groceryList: [
      'Chicken breast',
      'Salmon fillets',
      'Greek yogurt',
      'Mixed berries',
      'Quinoa',
      'Almonds'
    ]
  },
  '3': {
    id: '1',
    name: 'Weight Loss Plan',
    duration: '4 weeks',
    calories: 1800,
    description: 'A balanced plan focused on healthy weight loss through portion control and nutrient-dense foods.',
    progress: 65,
    image: 'salad',
    macros: {
      protein: 30,
      carbs: 40,
      fats: 30
    },
    schedule: {
      'Monday': {
        breakfast: 'Greek yogurt with berries',
        lunch: 'Grilled chicken salad',
        dinner: 'Salmon with quinoa',
        snacks: ['Apple', 'Almonds']
      },
      'Tuesday': {
        breakfast: 'Oatmeal with banana',
        lunch: 'Turkey wrap',
        dinner: 'Vegetable stir-fry',
        snacks: ['Protein shake']
      }
    },
    groceryList: [
      'Chicken breast',
      'Salmon fillets',
      'Greek yogurt',
      'Mixed berries',
      'Quinoa',
      'Almonds'
    ]
  },
  // Add other plans similarly...
};

const MealPlanDetails: React.FC = () => {
  const navigation = useNavigation<MealPlanDetailsNavigationProp>();
  const route = useRoute();
  const { planId } = route.params as { planId: string };
  const [activeTab, setActiveTab] = useState('overview');

  const plan = MEAL_PLAN_DETAILS[planId as keyof typeof MEAL_PLAN_DETAILS];

  if (!plan) {
    return (
      <SafeAreaView className="flex-1 bg-white items-center justify-center">
        <Text className="text-lg text-gray-500">Plan not found</Text>
      </SafeAreaView>
    );
  }

  const renderContent = () => {
    switch(activeTab) {
      case 'overview':
        return <OverviewTab plan={plan} />;
      case 'schedule':
        return <ScheduleTab schedule={plan.schedule} />;
      case 'grocery':
        return <GroceryTab groceries={plan.groceryList} />;
      default:
        return <OverviewTab plan={plan} />;
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView className="flex-1">
        {/* Header */}
        <View className="px-6 pt-6">
          <TouchableOpacity 
            onPress={() => navigation.goBack()} 
            className="absolute top-6 left-6 z-10"
          >
            <Ionicons name="arrow-back" size={24} color="#333" />
          </TouchableOpacity>
          <Text className="text-2xl font-bold text-center text-gray-900">Meal Plan Details</Text>
        </View>

        {/* Plan Hero Section */}
        <View className="px-6 mt-6">
          <View className="bg-gray-100 rounded-xl p-4">
            <Text className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</Text>
            <View className="flex-row justify-between mb-4">
              <View className="flex-row items-center">
                <MaterialCommunityIcons name="calendar-range" size={16} color="#8A47EB" />
                <Text className="text-sm text-gray-600 ml-1">{plan.duration}</Text>
              </View>
              <View className="flex-row items-center">
                <MaterialCommunityIcons name="fire" size={16} color="#FF6B6B" />
                <Text className="text-sm text-gray-600 ml-1">{plan.calories} kcal/day</Text>
              </View>
            </View>
            <ProgressBar progress={plan.progress} />
          </View>
        </View>

        {/* Tabs */}
        <View className="flex-row justify-around mt-6 border-b border-gray-200">
          {['overview', 'schedule', 'grocery'].map((tab) => (
            <TouchableOpacity
              key={tab}
              className={`pb-3 ${activeTab === tab ? 'border-b-2 border-purple-600' : ''}`}
              onPress={() => setActiveTab(tab)}
            >
              <Text className={`text-sm font-medium ${activeTab === tab ? 'text-purple-600' : 'text-gray-500'}`}>
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Content */}
        <View className="px-6 mt-4">
          {renderContent()}
        </View>
      </ScrollView>

      {/* Action Buttons */}
      <View className="flex-row justify-between p-4 bg-white border-t border-gray-100">
        <TouchableOpacity className="bg-gray-100 px-6 py-3 rounded-lg flex-1 mr-2">
          <Text className="text-center text-gray-900 font-medium">Edit Plan</Text>
        </TouchableOpacity>
        <TouchableOpacity className="bg-purple-600 px-6 py-3 rounded-lg flex-1 ml-2">
          <Text className="text-center text-white font-medium">Mark Completed</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const ProgressBar = ({ progress }: { progress: number }) => (
  <View className="relative">
    <View className="h-2 bg-gray-200 rounded-full overflow-hidden">
      <View 
        className="h-full bg-green-500 rounded-full" 
        style={{ width: `${progress}%` }}
      />
    </View>
    <Text className="text-xs text-gray-500 mt-1">Progress: {progress}%</Text>
  </View>
);

const OverviewTab = ({ plan }: { plan: any }) => (
  <View>
    <Text className="text-base text-gray-600 mb-4">{plan.description}</Text>
    
    <Text className="text-lg font-bold text-gray-900 mb-3">Nutritional Breakdown</Text>
    <View className="flex-row justify-between mb-4">
      <MacroPill icon="protein" value={plan.macros.protein} label="Protein" />
      <MacroPill icon="pasta" value={plan.macros.carbs} label="Carbs" />
      <MacroPill icon="avocado" value={plan.macros.fats} label="Fats" />
    </View>
  </View>
);

const MacroPill = ({ icon, value, label }: { icon: string; value: number; label: string }) => (
  <View className="items-center bg-gray-50 p-3 rounded-xl flex-1 mx-1">
    <MaterialCommunityIcons 
      name={icon} 
      size={24} 
      color="#8A47EB" 
      className="mb-1"
    />
    <Text className="font-bold text-gray-900">{value}%</Text>
    <Text className="text-xs text-gray-500">{label}</Text>
  </View>
);

const ScheduleTab = ({ schedule }: { schedule: any }) => (
  <View>
    {Object.entries(schedule).map(([day, meals]: [string, any]) => (
      <View key={day} className="mb-4 bg-gray-50 rounded-xl p-3">
        <Text className="font-bold text-gray-900 mb-2">{day}</Text>
        <MealTime time="Breakfast" meal={meals.breakfast} />
        <MealTime time="Lunch" meal={meals.lunch} />
        <MealTime time="Dinner" meal={meals.dinner} />
        {meals.snacks.map((snack: string, index: number) => (
          <MealTime key={index} time="Snack" meal={snack} />
        ))}
      </View>
    ))}
  </View>
);

const MealTime = ({ time, meal }: { time: string; meal: string }) => (
  <View className="flex-row items-center mb-2">
    <Text className="text-sm text-gray-500 w-20">{time}</Text>
    <View className="flex-1 bg-white p-2 rounded-lg">
      <Text className="text-gray-900">{meal}</Text>
    </View>
  </View>
);

const GroceryTab = ({ groceries }: { groceries: string[] }) => (
  <View className="bg-gray-50 rounded-xl p-3">
    {groceries.map((item, index) => (
      <View key={index} className="flex-row items-center py-2 border-b border-gray-200 last:border-0">
        <MaterialCommunityIcons name="checkbox-blank-outline" size={20} color="#8A47EB" />
        <Text className="ml-3 text-gray-900">{item}</Text>
      </View>
    ))}
  </View>
);

export default MealPlanDetails;