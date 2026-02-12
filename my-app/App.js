import { StyleSheet, Text, ScrollView, View, Image } from 'react-native';

const mockData = [
  {
    id: '1',
    name: 'Snow Biker',
    location: 'Nørrebro',
    image: require('./assets/goats.jpeg'),
  },
  {
    id: '2',
    name: 'Snow Biker 2',
    location: 'Nørrebro',
    image: require('./assets/goats.jpeg'),
  },
  {
    id: '3',
    name: 'Snow Biker',
    location: 'Nørrebro',
    image: require('./assets/goats.jpeg'),
  },
];


export default function App() {
  return (
    <ScrollView style={styles.container}>
      {mockData.map(i => (
        <View key={i.id} style={styles.post}>
          <View style={styles.PostHeader}>
            <Image source={require('./assets/icon.png')} style={styles.profileImage}></Image>
            <View>
              <Text style={styles.profileName}>{i.name}</Text>
              <Text>{i.location}</Text>
            </View>
          </View>
          <Image style={styles.postImage} source={require("./assets/goats.jpeg")}></Image>
          <Text style={styles.caption}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 50,
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
  }
});
