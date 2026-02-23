import { useEffect, useState } from 'react'
import { StyleSheet, Text, ScrollView, View, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';



const SettingsScreen = () => {
    const [value, setValue] = useState(0);

    const storeData = async (value) => {
        try {
            await AsyncStorage.setItem('expenses', value.toString());
        }
        catch (error) {
            console.log(error)
        }
    }

    const readData = async () => {
        try {
            const storedValue = await AsyncStorage.getItem('expenses');
            console.log("storedValue", storedValue);
            if (storedValue !== null) {
                setValue(Number(storedValue));
            }
            else {
                setValue(0);
            }
        }
        catch (error) {
            console.log(error);
        }
    }

    const clearLocalStorage = async () => {
        try {
            await AsyncStorage.removeItem('expenses');
            readData();
        }
        catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        readData();
    }, []);

    const increaseValue = () => {
        console.log("increase value called");
        const newValue = value + 10;
        setValue(newValue);
        storeData(newValue);
    }

    return (
        <ScrollView style={styles.scrollContainer} contentContainerStyle={{ flex: 1 }}>
            <View style={styles.container}>
                <Text style={styles.text}>
                    Settings {value}
                </Text>
                <Button title="Increase by 10" onPress={increaseValue} />
                <Button title="Clear local storage" onPress={clearLocalStorage} />
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
        flex: 1,
        backgroundColor: '#e3e3e3',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 15
    },

    text: {
        fontSize: 30
    }

});

