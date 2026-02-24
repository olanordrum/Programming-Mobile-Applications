import { StyleSheet, Text, ScrollView, View, Image, Button, Alert, useColorScheme } from 'react-native';
import { ThemeColors } from "../constants/ThemeColors"
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';


const mockData = [
    {
        id: '1',
        name: 'Snow Biker',
        location: 'Nørrebro',
        image: require('../assets/goats.jpeg'),
    },
    {
        id: '2',
        name: 'Snow Biker 2',
        location: 'Nørrebro',
        image: require('../assets/goats.jpeg'),
    },
    {
        id: '3',
        name: 'Snow Biker',
        location: 'Nørrebro',
        image: require('../assets/goats.jpeg'),
    },
];


const HomeScreen = () => {
    const colorScheme = useColorScheme();
    const theme = ThemeColors[colorScheme] ?? Colors.light;
    const tabBarHeight = useBottomTabBarHeight();



    return (
        <ScrollView contentContainerStyle={{ paddingBottom: tabBarHeight }} style={[styles.container]}>
            <Image source={require('../assets/goats.jpeg')} />
        </ScrollView>
    );
}

export default HomeScreen;


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
