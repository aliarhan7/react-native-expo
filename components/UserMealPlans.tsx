import React, { useState } from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, ScrollView, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../App';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

type MealPlansScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'MealPlans'>;

// Dummy data for meal plans
const DUMMY_MEAL_PLANS = [
  {
    id: '1',
    name: 'Weight Loss Plan',
    duration: '4 weeks',
    calories: 1800,
    lastUpdated: '3 days ago',
    progress: 65,
    image: 'salad'
  },
  {
    id: '2',
    name: 'Muscle Building',
    duration: '8 weeks',
    calories: 2500,
    lastUpdated: '1 week ago',
    progress: 30,
    image: 'protein'
  },
  {
    id: '3',
    name: 'Maintenance Diet',
    duration: '12 weeks',
    calories: 2100,
    lastUpdated: '2 days ago',
    progress: 15,
    image: 'balanced'
  },
];

const MealPlansScreen: React.FC = () => {
  const navigation = useNavigation<MealPlansScreenNavigationProp>();
  const [activeFilter, setActiveFilter] = useState('all');

  const handleMealPlanPress = (planId: string) => {
    // Navigate to meal plan details screen
    navigation.navigate('MealPlanDetails', { planId });
  };

  const getFilteredPlans = () => {
    if (activeFilter === 'all') return DUMMY_MEAL_PLANS;
    if (activeFilter === 'active') return DUMMY_MEAL_PLANS.filter(plan => plan.progress < 100 && plan.progress > 0);
    if (activeFilter === 'completed') return DUMMY_MEAL_PLANS.filter(plan => plan.progress === 100);
    return DUMMY_MEAL_PLANS;
  };

  const getImageSource = (type: string) => {
    // In a real app, you would use actual images
    switch(type) {
      case 'salad':
        return require('../assets/placeholder.png');
      case 'protein':
        return require('../assets/placeholder.png');
      case 'balanced':
        return require('../assets/placeholder.png');
      default:
        return require('../assets/placeholder.png');
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-1 px-6 pt-6">
        {/* Header */}
        <View className="flex-row justify-between items-center mb-6">
          <TouchableOpacity onPress={() => navigation.goBack()} className="p-2">
            <Ionicons name="arrow-back" size={24} color="#333" />
          </TouchableOpacity>
          <Text className="text-2xl font-bold text-gray-900">My Meal Plans</Text>
          <TouchableOpacity className="p-2">
            <Ionicons name="options-outline" size={24} color="#333" />
          </TouchableOpacity>
        </View>

        {/* Filters */}
        <View className="flex-row bg-gray-100 rounded-full p-1 mb-6">
          <TouchableOpacity 
            className={`flex-1 py-2 px-4 rounded-full ${activeFilter === 'all' ? 'bg-white shadow' : ''}`}
            onPress={() => setActiveFilter('all')}
          >
            <Text className={`text-center ${activeFilter === 'all' ? 'text-purple-600 font-medium' : 'text-gray-600'}`}>All</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            className={`flex-1 py-2 px-4 rounded-full ${activeFilter === 'active' ? 'bg-white shadow' : ''}`}
            onPress={() => setActiveFilter('active')}
          >
            <Text className={`text-center ${activeFilter === 'active' ? 'text-purple-600 font-medium' : 'text-gray-600'}`}>Active</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            className={`flex-1 py-2 px-4 rounded-full ${activeFilter === 'completed' ? 'bg-white shadow' : ''}`}
            onPress={() => setActiveFilter('completed')}
          >
            <Text className={`text-center ${activeFilter === 'completed' ? 'text-purple-600 font-medium' : 'text-gray-600'}`}>Completed</Text>
          </TouchableOpacity>
        </View>

        {/* Meal Plans List */}
        <ScrollView 
          className="flex-1" 
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 20 }}
        >
          {getFilteredPlans().length > 0 ? (
            getFilteredPlans().map(plan => (
              <MealPlanCard 
                key={plan.id} 
                plan={plan} 
                onPress={() => handleMealPlanPress(plan.id)}
                getImageSource={getImageSource}
              />
            ))
          ) : (
            <View className="items-center justify-center py-10">
              <MaterialCommunityIcons name="food-off" size={60} color="#ccc" />
              <Text className="text-lg text-gray-500 mt-4">No meal plans found</Text>
              <Text className="text-gray-400 text-center mt-2">Try changing your filter or create a new meal plan</Text>
            </View>
          )}
        </ScrollView>
        
        {/* Create New Plan Button */}
        <View className="pb-6 pt-2">
          <TouchableOpacity 
            className="bg-purple-600 py-4 rounded-xl flex-row justify-center items-center"
            onPress={() => navigation.navigate('FirstMealForm')}
          >
            <Ionicons name="add-circle-outline" size={20} color="white" className="mr-2" />
            <Text className="text-white font-bold text-lg ml-2">Create New Plan</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

interface MealPlanCardProps {
  plan: {
    id: string;
    name: string;
    duration: string;
    calories: number;
    lastUpdated: string;
    progress: number;
    image: string;
  };
  onPress: () => void;
  getImageSource: (type: string) => any;
}

const MealPlanCard: React.FC<MealPlanCardProps> = ({ plan, onPress, getImageSource }) => {
  return (
    <TouchableOpacity 
      className="bg-gray-50 rounded-xl mb-4 overflow-hidden"
      onPress={onPress}
    >
      <View className="flex-row">
        {/* Left side - Image */}
        <View className="w-24 h-24 bg-gray-200 justify-center items-center">
          <Image 
            source={getImageSource(plan.image)}
            className="w-full h-full"
            resizeMode="cover"
          />
        </View>
        
        {/* Right side - Content */}
        <View className="flex-1 p-3">
          <View className="flex-row justify-between items-start">
            <Text className="text-lg font-bold text-gray-900">{plan.name}</Text>
            <TouchableOpacity className="p-1">
              <MaterialCommunityIcons name="dots-vertical" size={18} color="#666" />
            </TouchableOpacity>
          </View>
          
          <View className="flex-row mt-1">
            <View className="flex-row items-center mr-4">
              <MaterialCommunityIcons name="calendar-range" size={14} color="#8A47EB" />
              <Text className="text-xs text-gray-600 ml-1">{plan.duration}</Text>
            </View>
            <View className="flex-row items-center">
              <MaterialCommunityIcons name="fire" size={14} color="#FF6B6B" />
              <Text className="text-xs text-gray-600 ml-1">{plan.calories} cal</Text>
            </View>
          </View>
          
          {/* Progress bar */}
          <View className="mt-2">
            <View className="h-2 bg-gray-200 rounded-full overflow-hidden">
              <View 
                className="h-full bg-green-500 rounded-full" 
                style={{ width: `${plan.progress}%` }} 
              />
            </View>
            <View className="flex-row justify-between mt-1">
              <Text className="text-xs text-gray-500">Progress: {plan.progress}%</Text>
              <Text className="text-xs text-gray-500">Updated {plan.lastUpdated}</Text>
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default MealPlansScreen;