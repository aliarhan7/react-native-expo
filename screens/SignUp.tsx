import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, ActivityIndicator, Alert, ScrollView } from 'react-native';
import { useSignUp, useOAuth, useAuth } from '@clerk/clerk-expo';
import { Ionicons } from '@expo/vector-icons';
import { Link, router } from 'expo-router';

// Tip tanımlamaları
type ErrorState = {
  email: string;
  password: string;
};

type SocialAuthStrategy = 'google' | 'apple';

export default function CustomSignUp() {
  const { isLoaded, signUp, setActive } = useSignUp();
  const { isSignedIn } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [pendingVerification, setPendingVerification] = useState(false);
  const [code, setCode] = useState('');
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState(0);
  const [errors, setErrors] = useState<ErrorState>({ email: '', password: '' });
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  
  // Social Auth Hooks
  const { startOAuthFlow: googleAuth } = useOAuth({ strategy: 'oauth_google' });
  const { startOAuthFlow: appleAuth } = useOAuth({ strategy: 'oauth_apple' });

  // Redirect if already signed in
  useEffect(() => {
    if (isSignedIn) {
      router.replace('/home');
    }
  }, [isSignedIn]);

  // Password strength checker
  useEffect(() => {
    // Simple password strength calculation
    let strength = 0;
    if (password.length > 0) strength += 1;
    if (password.length >= 8) strength += 1;
    if (/[A-Z]/.test(password)) strength += 1;
    if (/[0-9]/.test(password)) strength += 1;
    if (/[^A-Za-z0-9]/.test(password)) strength += 1;
    
    setPasswordStrength(strength);
  }, [password]);

  // Form validation
  const validateForm = (): boolean => {
    let valid = true;
    const newErrors: ErrorState = { email: '', password: '' };

    // Email validation
    if (!email.trim()) {
      newErrors.email = 'Email required';
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Invalid email format';
      valid = false;
    }

    // Password validation
    if (!password.trim()) {
      newErrors.password = 'Password required';
      valid = false;
    } else if (password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
      valid = false;
    }

    // Terms validation
    if (!agreedToTerms) {
      Alert.alert('Terms Required', 'Please agree to terms and privacy policy');
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  // Email & Password Sign Up
  const handleEmailSignUp = async (): Promise<void> => {
    if (!validateForm() || !signUp) return;
    
    setLoading(true);
    try {
      // Create the user
      await signUp.create({ 
        emailAddress: email, 
        password: password 
      });
      
      // Prepare verification
      await signUp.prepareEmailAddressVerification({ strategy: 'email_code' });
      setPendingVerification(true);
    } catch (error: unknown) {
      console.error('Sign up error:', error);
      const err = error as { errors?: Array<{ message: string }> };
      const errorMsg = err.errors?.[0]?.message || 'Failed to create account';
      Alert.alert('Sign Up Error', errorMsg);
    } finally {
      setLoading(false);
    }
  };

  // Email Verification
  const verifyEmail = async (): Promise<void> => {
    if (!code.trim() || !signUp) {
      Alert.alert('Verification Error', 'Please enter the verification code');
      return;
    }
    
    setLoading(true);
    try {
      const completeSignUp = await signUp.attemptEmailAddressVerification({ code });
      
      if (completeSignUp.status === 'complete' && setActive) {
        // Set the user session active
        await setActive({ session: completeSignUp.createdSessionId });
        Alert.alert('Success', 'Your account has been created!');
        router.replace('/home');
      }
    } catch (error: unknown) {
      console.error('Verification error:', error);
      const err = error as { errors?: Array<{ message: string }> };
      const errorMsg = err.errors?.[0]?.message || 'Failed to verify email';
      Alert.alert('Verification Error', errorMsg);
    } finally {
      setLoading(false);
    }
  };

  // Resend verification code
  const resendVerificationCode = async (): Promise<void> => {
    if (!signUp) return;
    
    try {
      setLoading(true);
      await signUp.prepareEmailAddressVerification({ strategy: 'email_code' });
      Alert.alert('Success', 'A new verification code has been sent');
    } catch (error: unknown) {
      console.error('Resend code error:', error);
      Alert.alert('Error', 'Failed to resend verification code');
    } finally {
      setLoading(false);
    }
  };

  // Social Auth Handlers
  const handleSocialAuth = async (strategy: SocialAuthStrategy): Promise<void> => {
    try {
      setLoading(true);
      const authFlow = strategy === 'google' ? googleAuth : appleAuth;
      
      if (!authFlow) {
        throw new Error(`OAuth provider for ${strategy} is not available`);
      }
      
      const { createdSessionId, setActive: setOAuthActive } = await authFlow();
      
      if (createdSessionId && setOAuthActive) {
        await setOAuthActive({ session: createdSessionId });
        router.replace('/home');
      }
    } catch (error: unknown) {
      console.error('Social auth error:', error);
      Alert.alert('Authentication Error', 'Failed to sign in. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  if (!isLoaded) {
    return (
      <View className="flex-1 justify-center items-center">
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <ScrollView className="flex-1 bg-gray-50">
      <View className="p-6 min-h-screen justify-center">
        {/* Header */}
        <View className="mb-8">
          <Text className="text-3xl font-bold text-gray-900">Create Account</Text>
          <Text className="text-gray-500 mt-2">Join our community today</Text>
        </View>

        {/* Email/Password Form */}
        {!pendingVerification ? (
          <View className="space-y-4">
            <View>
              <TextInput
                className={`bg-white p-4 rounded-lg border ${errors.email ? 'border-red-500' : 'border-gray-200'}`}
                placeholder="Email"
                value={email}
                onChangeText={(text) => {
                  setEmail(text);
                  if (errors.email) setErrors({...errors, email: ''});
                }}
                keyboardType="email-address"
                autoCapitalize="none"
                autoComplete="email"
              />
              {errors.email ? <Text className="text-red-500 text-sm ml-1 mt-1">{errors.email}</Text> : null}
            </View>

            <View>
              <View className="flex-row items-center bg-white rounded-lg border relative overflow-hidden">
                <TextInput
                  className={`flex-1 p-4 ${errors.password ? 'border-red-500' : 'border-gray-200'}`}
                  placeholder="Password"
                  value={password}
                  onChangeText={(text) => {
                    setPassword(text);
                    if (errors.password) setErrors({...errors, password: ''});
                  }}
                  secureTextEntry={!showPassword}
                  autoComplete="password-new"
                />
                <TouchableOpacity 
                  className="absolute right-3" 
                  onPress={() => setShowPassword(!showPassword)}
                >
                  <Ionicons name={showPassword ? "eye-off" : "eye"} size={24} color="gray" />
                </TouchableOpacity>
              </View>
              {errors.password ? <Text className="text-red-500 text-sm ml-1 mt-1">{errors.password}</Text> : null}
              
              {/* Password strength meter */}
              {password.length > 0 && (
                <View className="mt-2">
                  <View className="flex-row mt-1">
                    {[1, 2, 3, 4, 5].map((level) => (
                      <View 
                        key={level}
                        className={`h-1 flex-1 mx-0.5 rounded-full ${
                          level <= passwordStrength 
                            ? passwordStrength < 3 
                              ? 'bg-red-500' 
                              : passwordStrength < 5 
                                ? 'bg-yellow-500' 
                                : 'bg-green-500'
                            : 'bg-gray-300'
                        }`}
                      />
                    ))}
                  </View>
                  <Text className="text-xs text-gray-500 mt-1">
                    {passwordStrength < 3 
                      ? 'Weak password' 
                      : passwordStrength < 5 
                        ? 'Moderate password' 
                        : 'Strong password'}
                  </Text>
                </View>
              )}
            </View>
            
            {/* Terms and Privacy */}
            <View className="flex-row items-start mt-2">
              <TouchableOpacity 
                className="p-1 mr-2"
                onPress={() => setAgreedToTerms(!agreedToTerms)}
              >
                <View className={`w-5 h-5 border rounded flex items-center justify-center ${agreedToTerms ? 'bg-blue-500 border-blue-500' : 'border-gray-400'}`}>
                  {agreedToTerms && <Ionicons name="checkmark" size={16} color="white" />}
                </View>
              </TouchableOpacity>
              <Text className="text-gray-600 flex-1">
                I agree to the{' '}
                <Text className="text-blue-500">Terms of Service</Text> and{' '}
                <Text className="text-blue-500">Privacy Policy</Text>
              </Text>
            </View>
            
            <TouchableOpacity
              className={`p-4 rounded-lg items-center mt-5 ${loading || !isLoaded ? 'bg-blue-300' : 'bg-blue-500'}`}
              onPress={handleEmailSignUp}
              disabled={loading || !isLoaded}
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
            <Text className="text-gray-600 text-center mb-3 font-semibold text-base">
              We've sent a verification code to {email}
            </Text>
            <TextInput
              className="bg-white p-4 rounded-md border border-gray-200 text-center text-xl"
              placeholder="Enter verification code"
              value={code}
              onChangeText={setCode}
              keyboardType="number-pad"
              maxLength={6}
            />
            <TouchableOpacity
              className={`p-4 rounded-lg items-center ${loading ? 'bg-green-300' : 'bg-green-500'}`}
              onPress={verifyEmail}
              disabled={loading}
            >
              {loading ? (
                <ActivityIndicator color="white" />
              ) : (
                <Text className="text-white font-medium">Verify Email</Text>
              )}
            </TouchableOpacity>
            
            <TouchableOpacity 
              className="items-center mt-3"
              onPress={resendVerificationCode}
              disabled={loading}
            >
              <Text className="text-blue-500">Didn't receive a code? Resend</Text>
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
            className="flex-row items-center justify-center bg-white border border-gray-300 p-4 rounded-lg"
            onPress={() => handleSocialAuth('google')}
            disabled={loading}
          >
            <Ionicons name="logo-google" size={20} color="#4285F4" />
            <Text className="font-medium ml-2">Continue with Google</Text>
          </TouchableOpacity>

          <TouchableOpacity
            className="flex-row items-center justify-center bg-black p-4 rounded-lg"
            onPress={() => handleSocialAuth('apple')}
            disabled={loading}
          >
            <Ionicons name="logo-apple" size={20} color="white" />
            <Text className="text-white font-medium ml-2">Continue with Apple</Text>
          </TouchableOpacity>
        </View>

        {/* Login Link */}
        <View className="mt-6 flex-row justify-center">
          <Text className="text-gray-600">Already have an account? </Text>
          <Link href="/login" className="text-blue-500 font-medium">Sign In</Link>
        </View>
      </View>
    </ScrollView>
  );
}