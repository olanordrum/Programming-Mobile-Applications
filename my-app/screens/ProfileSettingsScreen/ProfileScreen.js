import { StyleSheet, Text, ScrollView, View, Button } from 'react-native';
import { useNavigation } from "@react-navigation/native";


const ProfileScreen = () => {
    const navigation = useNavigation();
    return (
        <ScrollView style={styles.scrollContainer} contentContainerStyle={{ flex: 1 }}>
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

