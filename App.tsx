// App.tsx
import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ClerkProvider, useAuth } from '@clerk/clerk-expo';
import { View, ActivityIndicator } from 'react-native';

// Göreceli import yollarını düzeltme
import Tabs from './components/Tabs';
import Chat from './screens/Chat';
import "./global.css";
import FirstMealForm from "./components/MealPlanForm/FirstMealForm";
import FinalMealForm from "./components/MealPlanForm/FinalMealForm";
import UserInfoScreen from './components/MealPlanForm/UserInfo';
import AllergySelectionScreen from './components/MealPlanForm/AllergySelection';
import MealPlansScreen from './components/UserMealPlans';
import MealPlanDetails from './components/MealPlanDetails';
import SignUpScreen from './screens/SignUp';

export type RootStackParamList = {
  Home: undefined;
  StepOne: undefined;
  AllergySelection: undefined;
  UserInfo: undefined;
  Final: undefined;
};

const Stack = createStackNavigator();

function AppNavigator() {
  const { isSignedIn, isLoaded } = useAuth();
  
  if (!isLoaded) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <NavigationContainer>
      {!isSignedIn ? (
        <Stack.Navigator>
          <Stack.Screen 
            name="SignUp" 
            component={SignUpScreen} 
            options={{ headerShown: false }} 
          />
        </Stack.Navigator>
      ) : (
        <Stack.Navigator>
          <Stack.Screen
            name="MainTabs"
            component={Tabs}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Chat"
            component={Chat}
            options={{ headerShown: false }}
          />
          <Stack.Screen 
            name="FirstMealForm" 
            component={FirstMealForm} 
            options={{ headerShown: false }} 
          />
          <Stack.Screen 
            name="UserInfo" 
            component={UserInfoScreen} 
            options={{ headerShown: false }} 
          />
          <Stack.Screen 
            name="AllergySelection" 
            component={AllergySelectionScreen} 
            options={{ headerShown: false }} 
          />
          <Stack.Screen 
            name="FinalMealForm" 
            component={FinalMealForm} 
            options={{ headerShown: false }} 
          />
          <Stack.Screen 
            name="UserMeals" 
            component={MealPlansScreen} 
            options={{ headerShown: false }} 
          />
          <Stack.Screen 
            name="MealPlanDetails" 
            component={MealPlanDetails} 
            options={{ headerShown: false }} 
          />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
}

export default function App() {
  return (
    <ClerkProvider
      publishableKey="pk_test_dGhhbmtmdWwtaW1wYWxhLTkuY2xlcmsuYWNjb3VudHMuZGV2JA"
    >
      <AppNavigator />
    </ClerkProvider>
  );
}