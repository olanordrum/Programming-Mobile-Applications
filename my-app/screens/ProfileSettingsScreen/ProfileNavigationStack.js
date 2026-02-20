import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SettingsScreen from './SettingsScreen';
import ProfileScreen from './ProfileScreen';

const Stack = createNativeStackNavigator();

export const ProfileStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Profile" component={ProfileScreen} />
            <Stack.Screen name="Settings" component={SettingsScreen} />
        </Stack.Navigator>
    )
}

