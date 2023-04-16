import React from 'react';

import { StatusBar, StatusBarStyle } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaView } from 'react-native-safe-area-context'
import { useColorScheme } from 'react-native';
import { NativeBaseProvider } from "native-base";

import { ExpenseForm } from './src/components/pages/ExpenseScreen';
import { SettingsScreen } from './src/components/pages/SettingsScreen'
import { OtherScreen } from './src/components/pages/OtherScreen'

const Tab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();

export default function App() {
  const isDarkMode = useColorScheme() === 'dark';
  const statusBarStyle: StatusBarStyle = isDarkMode ? 'light' : 'dark';
  return (
    <NativeBaseProvider>
      <SafeAreaView style={{ flex: 1 , backgroundColor: isDarkMode ? 'black' : 'white' }}>
        <StatusBar style={statusBarStyle} />
        <NavigationContainer>
          <Tab.Navigator>
            <Tab.Screen name="ExpenseForm" component={ExpenseForm} />
            <Tab.Screen name="Settings" component={SettingsScreen} />
            <Tab.Screen name="Other" component={OtherScreen} />
          </Tab.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </NativeBaseProvider>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});



