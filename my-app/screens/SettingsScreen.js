import { StyleSheet, Text, ScrollView, View, Image, Button, Alert } from 'react-native';

const SettingsScreen = () => {
    return (
        <ScrollView style={styles.scrollContainer} contentContainerStyle={{ flex: 1 }}>
            <View style={styles.container}>
                <Text>
                    Settings
                </Text>
            </View>
        </ScrollView>
    )
}

export default SettingsScreen;

const styles = StyleSheet.create({
    scrollContainer: {
        backgroundColor: '#47ac1f',
    },

    container: {
        backgroundColor: '#e44242',
        alignItems: 'center',
        justifyContent: 'center'
    }

});

