import React, { useState, useEffect, useRef } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';

const API_URL = 'http:/localhost:5000';

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
  options?: string[];
}

interface Recipe {
  name: string;
  prepTime: string;
  difficulty: string;
  tags: string[];
}

const TypingIndicator = () => {
  return (
    <View className="flex-row items-center p-2">
      {[0, 1, 2].map((index) => (
        <View
          key={index}
          className="w-2 h-2 bg-gray-500 rounded-full mx-1"
        />
      ))}
    </View>
  );
};

const RecipeAssistantApp = () => {
  const navigation = useNavigation();
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollViewRef = useRef<ScrollView>(null);

  // Initial greeting message when component mounts
  useEffect(() => {
    setMessages([
      {
        id: '1',
        text: 'Merhaba! Bugün yemek tarifi bakciagina spora basla bence aminakodum sismani!',
        isUser: false,
        timestamp: new Date(),
        options: ["ney?", "Gotumu mu siktireyim?"]
      },
    ]);
  }, []);

  // Auto scroll to bottom when messages change
  useEffect(() => {
    setTimeout(() => {
      scrollViewRef.current?.scrollToEnd({ animated: true });
    }, 100);
  }, [messages]);

  const sendMessage = async (text: string = inputText) => {
    if (text.trim() === '') return;
    
    const userMessage: Message = {
      id: Date.now().toString(),
      text: text,
      isUser: true,
      timestamp: new Date(),
    };
    
    setMessages((prevMessages) => [...prevMessages, userMessage]);
    setInputText('');
    setIsLoading(true);

    try {
      const response = await axios.post(`${API_URL}/chatbot`, {
        userInput: text,
        clerk_user_id: 'clerk_123' // Replace with actual Clerk user ID
      });

      let botText;
      let botOptions: string[] = [];
      
      if (response.data.name) {
        // Handle recipe response
        botText = JSON.stringify(response.data);
      } else if (response.data.text) {
        // Handle conversational response
        botText = response.data.text;
        botOptions = response.data.options || [];
      } else {
        botText = 'Üzgünüm, bir hata oluştu.';
      }

      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: botText,
        isUser: false,
        timestamp: new Date(),
        options: botOptions,
      };

      setMessages((prevMessages) => [...prevMessages, botMessage]);
    } catch (error) {
      console.error('Error sending message:', error);
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: 'Bağlantı hatası. Lütfen daha sonra tekrar deneyin.',
        isUser: false,
        timestamp: new Date(),
      };
      
      setMessages((prevMessages) => [...prevMessages, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleOptionClick = (option: string) => {
    sendMessage(option);
  };

  const formatTime = (date: Date) => {
    return new Intl.DateTimeFormat('tr-TR', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: false
    }).format(date);
  };

  // Show date separator
  const renderDateHeader = () => {
    return (
      <View className="flex items-center my-2">
        <Text className="text-xs text-gray-500">
          {new Intl.DateTimeFormat('tr-TR', {
            weekday: 'short',
            hour: '2-digit',
            minute: '2-digit'
          }).format(new Date())}
        </Text>
      </View>
    );
  };

  // Render recipe card - for recipe responses that can be parsed as JSON
  const renderRecipeCard = (message: Message) => {
    try {
      const recipe: Recipe = JSON.parse(message.text);
      
      return (
        <View key={message.id} className="mb-4 mx-4">
          <View className="bg-blue-50 p-4 rounded-3xl">
            <Text className="text-blue-600 text-base font-medium text-right">{recipe.name}</Text>
            
            <View className="mt-3 items-end">
              <View className="flex-row items-center justify-end">
                <Text className="text-sm font-medium text-gray-800">{recipe.prepTime}</Text>
                <View className="w-1 h-1 bg-gray-300 rounded-full mx-2"></View>
                <Text className="text-sm font-medium text-gray-800">{recipe.difficulty}</Text>
              </View>
              
              <View className="flex-row mt-3 gap-2">
                {recipe.tags.map((tag, index) => (
                  <View key={index} className="bg-white px-3 py-1.5 rounded-2xl flex-row items-center">
                    <Text className="text-sm text-gray-500 font-medium mr-1.5">{tag}</Text>
                    <Ionicons 
                      name={
                        tag.includes("Vegan") || tag.includes("Vejetaryen") ? "leaf-outline" : 
                        tag.includes("Kolay") ? "time-outline" : 
                        "restaurant-outline"
                      } 
                      size={20} 
                      color="#0070F0" 
                    />
                  </View>
                ))}
              </View>
            </View>
          </View>
        </View>
      );
    } catch (e) {
      // If parsing fails, render as normal message
      return renderNormalMessage(message);
    }
  };

  // Render normal message
  const renderNormalMessage = (message: Message, showAvatar = true) => {
    if (message.isUser) {
      return (
        <View key={message.id} className="mb-4 ml-12 mr-4">
          <View className="bg-blue-600 p-4 rounded-3xl rounded-tr-sm self-end">
            <Text className="text-white text-base">{message.text}</Text>
          </View>
        </View>
      );
    }
    
    return (
      <View key={message.id} className="mb-4 mx-4 flex-row">
        {showAvatar && (
          <View className="w-8 h-8 bg-blue-50 rounded-md mr-2 items-center justify-center">
            <View className="w-4 h-4 bg-blue-500 rounded-sm"></View>
          </View>
        )}
        <View className="flex-1">
          <View className="bg-gray-100 p-4 rounded-3xl rounded-tl-sm">
            <Text className="text-gray-800 text-base">{message.text}</Text>
          </View>
          
          {message.options && message.options.length > 0 && (
            <View className="mt-4 gap-2">
              {message.options.map((option, index) => (
                <TouchableOpacity 
                  key={index}
                  className="bg-blue-50 py-2.5 px-4 rounded-3xl"
                  onPress={() => handleOptionClick(option)}
                >
                  <Text className="text-blue-600 text-base font-medium">{option}</Text>
                </TouchableOpacity>
              ))}
            </View>
          )}
        </View>
      </View>
    );
  };
  
  // Render message based on type
  const renderMessage = (message: Message, index: number) => {
    // Check if it's a JSON message (recipe card)
    if (!message.isUser && message.text.startsWith('{')) {
      return renderRecipeCard(message);
    }
    
    // For regular messages, check if we need to show the avatar
    if (!message.isUser && index > 0) {
      const prevMessage = messages[index - 1];
      const showAvatar = prevMessage.isUser;
      return renderNormalMessage(message, showAvatar);
    }
    
    return renderNormalMessage(message);
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
      
      {/* Header */}
      <View className="flex-row justify-between items-center px-6 pt-15 pb-4 border-b border-gray-100">
        <TouchableOpacity onPress={() => navigation.goBack()} className="w-11 h-11 border border-gray-200 rounded-md items-center justify-center">
          <Ionicons name="chevron-back" size={24} color="#72777A" />
        </TouchableOpacity>
        
        <View className="flex-row items-center gap-3">
          <View className="w-11 h-11 bg-blue-50 rounded-md items-center justify-center">
            <View className="w-6 h-6 bg-blue-500 rounded-sm"></View>
          </View>
          <View>
            <Text className="font-bold text-sm text-gray-900">GainAI</Text>
            <View className="flex-row items-center mt-0.5">
              <View className="w-2 h-2 bg-green-400 rounded-full mr-1"></View>
              <Text className="text-xs text-gray-500">sEMTTe</Text>
            </View>
          </View>
        </View>
        
        <TouchableOpacity className="w-11 h-11 border border-gray-200 rounded-md items-center justify-center">
          <Ionicons name="ellipsis-horizontal" size={24} color="#72777A" />
        </TouchableOpacity>
      </View>
      
      {/* Chat Container */}
      <KeyboardAvoidingView
        className="flex-1"
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 0}
      >
        <ScrollView
          ref={scrollViewRef}
          className="flex-1 bg-white"
          contentContainerStyle={{ paddingVertical: 16 }}
        >
          {renderDateHeader()}
          {messages.map((message, index) => renderMessage(message, index))}
          
          {isLoading && (
            <View className="ml-10 bg-gray-100 p-2 rounded-3xl rounded-tl-sm mx-4 self-start">
              <TypingIndicator />
            </View>
          )}
        </ScrollView>
        
        {/* Input Container */}
        <View className="bg-white py-8 px-6 border-t border-gray-100">
          <View className="flex-row items-center">
            <View className="flex-1 flex-row items-center border border-gray-400 rounded-full px-5 py-2.5">
              <TextInput
                className="flex-1 text-base text-gray-800 mb-3"
                value={inputText}
                onChangeText={setInputText}
                placeholder="Mesaj yaz..."
                placeholderTextColor="#72777A"
                multiline
                maxLength={1000}
              />
              <TouchableOpacity>
                <Ionicons name="mic-outline" size={24} color="#72777A" />
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              onPress={() => sendMessage()}
              disabled={inputText.trim() === '' || isLoading}
              className="bg-gray-800 w-11 h-11 rounded-md items-center justify-center ml-4"
            >
              <Ionicons name="send-outline" size={20} color="white" />
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default RecipeAssistantApp;