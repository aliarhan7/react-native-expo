import { View, Text, TouchableOpacity, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../App';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

type HomeScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;

const HomeScreen: React.FC = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();

  const startMealPlanCreation = () => {
    navigation.navigate('FirstMealForm');
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-1 px-6 pt-8">
        {/* Header */}
        <View className="items-center mb-12">
          <MaterialCommunityIcons 
            name="food-apple-outline" 
            size={48} 
            color="#8A47EB" 
            style={{ marginBottom: 16 }}
          />
          <Text className="text-3xl font-bold text-gray-900 mb-2">Smart Meal Planner</Text>
          <Text className="text-lg text-gray-600 text-center">
            Create your personalized nutrition plan based on training goals and dietary needs
          </Text>
        </View>

        {/* Action Cards */}
        <View className="flex-row justify-between mb-8">
          <TouchableOpacity 
            className="bg-[#F8F5FF] p-6 rounded-2xl flex-1 mr-3 items-center"
            onPress={startMealPlanCreation}
          >
            <View className="bg-[#8A47EB] w-12 h-12 rounded-full items-center justify-center mb-4">
              <Ionicons name="add" size={24} color="white" />
            </View>
            <Text className="text-lg font-semibold text-gray-900 mb-1">New Meal Plan</Text>
            <Text className="text-sm text-gray-600 text-center">Get personalized recommendations</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate("UserMeals")} className="bg-[#F8F5FF] p-6 rounded-2xl flex-1 ml-3 items-center">
            <View className="bg-[#8A47EB] w-12 h-12 rounded-full items-center justify-center mb-4">
              <Ionicons name="list" size={24} color="white" />
            </View>
            <Text className="text-lg font-semibold text-gray-900 mb-1">My Plans</Text>
            <Text className="text-sm text-gray-600 text-center">View existing programs</Text>
          </TouchableOpacity>
        </View>

        {/* Key Features Grid */}
        <Text className="text-xl font-bold text-gray-900 mb-6">Key Features</Text>
        <View className="flex-row flex-wrap justify-between">
          <FeatureCard 
            icon="bullseye-arrow" 
            title="Goal Tracking" 
            description="Monitor fitness progress" 
          />
          <FeatureCard 
            icon="nutrition" 
            title="Macro Counter" 
            description="Track nutrients intake" 
          />
          <FeatureCard 
            icon="swap-horizontal" 
            title="Food Swap" 
            description="Find alternatives" 
          />
          <FeatureCard 
            icon="chart-line" 
            title="Progress AI" 
            description="Smart predictions" 
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const FeatureCard = ({ icon, title, description }: any) => (
  <TouchableOpacity className="w-[48%] bg-[#F8F5FF] p-4 rounded-xl mb-4">
    <View className="bg-[#8A47EB] w-10 h-10 rounded-lg items-center justify-center mb-3">
      <MaterialCommunityIcons name={icon} size={20} color="white" />
    </View>
    <Text className="text-base font-semibold text-gray-900 mb-1">{title}</Text>
    <Text className="text-sm text-gray-600">{description}</Text>
  </TouchableOpacity>
);

export default HomeScreen;