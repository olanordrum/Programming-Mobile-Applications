import { Text, useColorScheme, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Ionicons from '@expo/vector-icons/Ionicons';
import { BlurView } from 'expo-blur';

import HomeScreen from './screens/HomeScreen'
import { ProfileNavigationStack } from './screens/ProfileSettingsScreen/ProfileNavigationStack';
import { ThemeColors } from './constants/ThemeColors';




const Tab = createBottomTabNavigator()

export default function App() {
  const theme = useColorScheme();
  const colors = ThemeColors[theme] ?? 'light';

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: ThemeColors.accent,
          tabBarInactiveTintColor: ThemeColors.primary,
          tabBarStyle: { position: 'absolute' },
          tabBarBackground: () => (
            <BlurView tint="light" intensity={100} style={StyleSheet.absoluteFill} />
          ),
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

        <Tab.Screen name="ProfileNavigationStack"
          component={ProfileNavigationStack}
          options={{
            tabBarIcon: ({ color }) => <Ionicons name="person" size={20} color={color} />,
            tabBarLabel: ({ focused, color }) => <Text style={{ fontWeight: focused ? "bold" : "normal", color: color }}> Profile </Text>,
            headerShown: false
          }} />

      </Tab.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  blurContainer: {
    flex: 1,
    padding: 20,
    margin: 16,
    textAlign: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    borderRadius: 20,
  },
})

