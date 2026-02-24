import { StyleSheet, Text, ScrollView, View, Button } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';


const ProfileScreen = () => {
    const navigation = useNavigation();
    const tabBarHeight = useBottomTabBarHeight();

    return (
        <ScrollView contentContainerStyle={{ flex: 1, paddingBottom: tabBarHeight }} style={styles.scrollContainer}>
            <View style={styles.container}>
                <Text>
                    Profile
                </Text>
                <Button title="Settings" onPress={() => navigation.navigate("Settings")} />
            </View>
        </ScrollView>
    )
}

export default ProfileScreen;

const styles = StyleSheet.create({
    scrollContainer: {
        backgroundColor: '#47ac1f',
    },

    container: {
        flex: 1,
        backgroundColor: '#e3e3e3',
        alignItems: 'center',
        justifyContent: 'center'
    }

});

