import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ActivityIndicator, Alert } from 'react-native';
import { useSignUp, useOAuth } from '@clerk/clerk-expo';
import { Ionicons } from '@expo/vector-icons';
import { Link } from 'expo-router';

export default function CustomSignUp() {
  const { isLoaded, signUp } = useSignUp();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [pendingVerification, setPendingVerification] = useState(false);
  const [code, setCode] = useState('');
  const [loading, setLoading] = useState(false);
  
  // Social Auth Hooks
  const { startOAuthFlow: googleAuth } = useOAuth({ strategy: 'oauth_google' });
  const { startOAuthFlow: appleAuth } = useOAuth({ strategy: 'oauth_apple' });

  // Email & Password Sign Up
  const handleEmailSignUp = async () => {
    if (!validateForm()) return;
    
    setLoading(true);
    try {
      await signUp?.create({ emailAddress: email, password: password });
      await signUp?.prepareEmailAddressVerification({ strategy: 'email_code' });
      setPendingVerification(true);
      Alert.alert('Success', 'Verification code sent to your email');
    } catch (err: any) {
      Alert.alert('Error', err.errors[0].message);
    } finally {
      setLoading(false);
    }
  };

  // Email Verification
  const verifyEmail = async () => {
    if (!code.trim()) return;
    
    setLoading(true);
    try {
      const completeSignUp = await signUp?.attemptEmailAddressVerification({ code });
      if (completeSignUp?.status === 'complete') {
        Alert.alert('Verified', 'Your account has been created!');
      }
    } catch (err: any) {
      Alert.alert('Error', err.errors[0].message);
    } finally {
      setLoading(false);
    }
  };

  // Social Auth Handlers
  const handleSocialAuth = async (strategy: 'google' | 'apple') => {
    const authFlow = strategy === 'google' ? googleAuth : appleAuth;
    
    try {
      const { createdSessionId, setActive } = await authFlow();
      if (createdSessionId && setActive) {
        await setActive({ session: createdSessionId });
      }
    } catch (err) {
      Alert.alert('Error', 'Authentication failed. Please try again.');
    }
  };

  // Form Validation
  const validateForm = () => {
    if (!email.includes('@')) {
      Alert.alert('Invalid Email', 'Please enter a valid email address');
      return false;
    }
    if (password.length < 6) {
      Alert.alert('Weak Password', 'Password must be at least 6 characters');
      return false;
    }
    return true;
  };

  return (
    <View className="flex-1 bg-gray-50 p-6 justify-center -mt-10">
      {/* Header */}
      <View className="mb-12">
        <Text className="text-3xl font-bold text-gray-900">Create Account</Text>
        <Text className="text-gray-500 mt-2">Join our community today</Text>
      </View>



      {/* Email/Password Form */}
      {!pendingVerification ? (
        <View className="space-y-4">
          <TextInput
            className="bg-white p-4 rounded-lg border border-gray-200"
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
          <TextInput
            className="bg-white p-4 rounded-lg border border-gray-200 mt-1"
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
          
          <TouchableOpacity
            className="bg-blue-500 p-4 rounded-lg items-center mt-5"
            onPress={handleEmailSignUp}
            disabled={loading}
          >
            {loading ? (
              <ActivityIndicator color="white" />
            ) : (
              <Text className="text-white font-medium">Sign Up</Text>
            )}
          </TouchableOpacity>
        </View>
      ) : (
        // Verification Code Input
        <View className="space-y-4">
          <Text className="text-gray-600 text-center">
            We've sent a verification code to your email
          </Text>
          <TextInput
            className="bg-white p-4 rounded-lg border border-gray-200 text-center text-xl"
            placeholder="Enter 6-digit code"
            value={code}
            onChangeText={setCode}
            keyboardType="number-pad"
            maxLength={6}
          />
          <TouchableOpacity
            className="bg-green-500 p-4 rounded-lg items-center"
            onPress={verifyEmail}
            disabled={loading}
          >
            {loading ? (
              <ActivityIndicator color="white" />
            ) : (
              <Text className="text-white font-medium">Verify Email</Text>
            )}
          </TouchableOpacity>
        </View>
      )}
            <View className="flex-row items-center my-6">
        <View className="flex-1 h-px bg-gray-300" />
        <Text className="mx-4 text-gray-500">or</Text>
        <View className="flex-1 h-px bg-gray-300" />
      </View>
      {/* Social Buttons */}
      <View className="space-y-4 mb-8 gap-3">
        <TouchableOpacity
          className="flex-row items-center justify-center bg-red-500 p-4 rounded-lg"
          onPress={() => handleSocialAuth('google')}
        >
          <Ionicons name="logo-google" size={20} color="white" />
          <Text className="text-white font-medium ml-2">Continue with Google</Text>
        </TouchableOpacity>

        <TouchableOpacity
          className="flex-row items-center justify-center bg-black p-4 rounded-lg"
          onPress={() => handleSocialAuth('apple')}
        >
          <Ionicons name="logo-apple" size={20} color="white" />
          <Text className="text-white font-medium ml-2">Continue with Apple</Text>
        </TouchableOpacity>
      </View>

      {/* Login Link */}
      <View className="mt-8 flex-row justify-center">
        <Text className="text-gray-600">Already have an account? </Text>
        <Link href="/login" className="text-blue-500 font-medium">Sign In</Link>
      </View>
    </View>
  );
}