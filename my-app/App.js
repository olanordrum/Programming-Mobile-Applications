import { Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Ionicons from '@expo/vector-icons/Ionicons';

import HomeScreen from './screens/HomeScreen'
import SettingsScreen from './screens/ProfileSettingsScreen/SettingsScreen'
import { ProfileStack } from './screens/ProfileSettingsScreen/ProfileNavigationStack';




const Tab = createBottomTabNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarLabelPosition: "below-icon",
          tabBarActiveTintColor: "orange",
          tabBarInactiveTintColor: "grey",
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ color }) => <Ionicons name="home" size={20} color={color} />,
            tabBarLabel: ({ focused, color }) => <Text style={{ fontWeight: focused ? "bold" : "normal", color: color }}> Home </Text>,
          }}
        />

        <Tab.Screen name="Profile"
          component={ProfileStack}
          options={{
            tabBarIcon: ({ color }) => <Ionicons name="person" size={20} color={color} />,
            tabBarLabel: ({ focused, color }) => <Text style={{ fontWeight: focused ? "bold" : "normal", color: color }}> Profile </Text>,
            headerShown: false
          }} />

      </Tab.Navigator>
    </NavigationContainer>
  )
}