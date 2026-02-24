import { StyleSheet, Text, ScrollView, View, Image, Button, Alert, useColorScheme } from 'react-native';
import { ThemeColors } from "../constants/ThemeColors"

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


    return (
        <ScrollView style={[styles.container, { backgroundColor: theme.background }]}>
            {mockData.map(i => (
                <View key={i.id}>
                    <View style={styles.PostHeader}>
                        <Image source={require('../assets/icon.png')} style={styles.profileImage}></Image>
                        <View>
                            <Text style={styles.profileName}>{i.name}</Text>
                            <Text>{i.location}</Text>
                        </View>
                    </View>
                    <Image style={styles.postImage} source={i.image}></Image>
                    <Text
                        style={styles.caption}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    </Text>
                    <View style={[styles.buttonView, { backgroundColor: ThemeColors.accent }]}>
                        <Button
                            title="Press me"
                            color={theme.text}
                            onPress={() =>
                                Alert.alert("Alert title", "Alert message", [
                                    {
                                        text: "Yes",
                                        onPress: () => console.log("Yes pressed")
                                    },
                                    {
                                        text: "No",
                                        onPress: () => console.log("No pressed")
                                    },
                                ])}
                        />
                    </View>
                </View>
            ))}
        </ScrollView>
    );
}

export default HomeScreen;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%"
    },

    PostHeader: {
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
        marginTop: 20,
        paddingHorizontal: 20,
        marginBottom: 10,
    },

    profileName: {
        fontWeight: 'bold'
    },

    postImage: {
        width: "100%",
        height: 400
    },

    profileImage: {
        width: 50,
        height: 50
    },

    caption: {
        marginTop: 10,
        marginLeft: 10
    },

    buttonView: {
        alignItems: 'center',
        borderWidth: 5,
        borderColor: 'black'
    }
});
