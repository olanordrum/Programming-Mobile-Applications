import { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, Image, Pressable } from 'react-native';

const songs = [
  {
    id: 1,
    title: "Rosa Sky",
    artist: "Cezinando",
    cover: require("./assets/album.jpeg"),
  },
  {
    id: 2,
    title: "Håper du har plass",
    artist: "Cezinando",
    cover: require("./assets/album2.jpg"),
  },
  {
    id: 3,
    title: "Vi er perfekt men verden er ikke det",
    artist: "Cezinando",
    cover: require("./assets/album3.jpeg"),
  },
  {
    id: 4,
    title: "Baby boss",
    artist: "Cezinando",
    cover: require("./assets/album4.jpeg"),
  },
];

export default function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentSong = songs[currentIndex] ?? songs[0];

  const handleNext = () => {
    setCurrentIndex((current) => (current + 1) % songs.length);

  }

  const handlePrevious = () => {
    setCurrentIndex(
      currentIndex === 0 ? songs.length - 1 : currentIndex - 1
    );
  }


  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image source={require("./assets/keyboard_arrow_down.png")} />
        <Text style={styles.albumText}>Et godt stup i grunt vann</Text>
        <Image style={styles.symbols} source={require("./assets/more.png")} />
      </View>
      <View style={styles.albumArt}>
        <Image style={styles.albumCover} source={currentSong.cover} />
      </View>
      <View style={styles.controls}>
        <View style={styles.songInfoContainer}>
          <View style={styles.songInfo}>
            <Text style={styles.titleText}>
              {currentSong.title}
            </Text>
            <Text style={styles.artistText}>
              {currentSong.artist}
            </Text>
          </View>
          <Image style={styles.checkSymbol} source={require("./assets/green_check.png")} />
        </View>
        <View style={styles.statusbar}>
          <View style={styles.bar} />
          <View style={styles.songTime}>
            <Text style={styles.artistText}>
              1:15
            </Text>
            <Text style={styles.artistText}>
              5:12
            </Text>
          </View>
        </View>
        <View style={styles.controlButtons}>
          <Image style={styles.shuffleRepeatButton} source={require('./assets/shuffle.png')} />

          <Pressable onPress={handlePrevious}>
            <Image style={styles.skipButton} source={require('./assets/skip_backwards.png')} />
          </Pressable>

          <Image style={styles.playButton} source={require('./assets/play_circle.png')} />

          <Pressable onPress={handleNext}>
            <Image style={styles.skipButton} source={require('./assets/skip_forward.png')} />
          </Pressable>

          <Image style={styles.shuffleRepeatButton} source={require('./assets/repeat.png')} />
        </View>
        <View style={styles.bottomSymbols}>
          <Image style={styles.shuffleRepeatButton} source={require('./assets/speaker.png')} />
          <View style={styles.shareAndQue}>
            <Image style={styles.shuffleRepeatButton} source={require('./assets/list.png')} />
            <Image style={styles.shuffleRepeatButton} source={require('./assets/share.png')} />
          </View>
        </View>
      </View>
      <View style={styles.discover}>
        <Text style={styles.discoverText}>Discover Cezinando</Text>
        <Image style={styles.discoverImage} source={require('./assets/discoverCezinando.jpeg')} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  albumText: {
    color: 'white',
    fontWeight: 'bold',
  },

  symbols: {
    width: 20,
    height: 20
  },

  container: {
    flex: 1,
    backgroundColor: '#0B0A77',
    paddingTop: 60,
    paddingHorizontal: 20,
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },

  albumArt: {
    marginTop: 30,
    width: "100%",
    alignItems: 'center',

  },

  albumCover: {
    width: '100%',
    height: 320,

  },

  controls: {
    marginTop: 40,
    gap: 20
  },

  songInfoContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: '100%'
  },

  songInfo: {
    gap: 5,
    flex: 1
  },

  titleText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 24,
  },

  artistText: {
    color: 'white',
    fontSize: 15,
  },

  checkSymbol: {
    width: 25,
    height: 25
  },

  statusbar: {
    gap: 10
  },

  bar: {
    backgroundColor: "white",
    height: 2,
    borderRadius: 3
  },

  songTime: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  controlButtons: {
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: "space-between",
    alignItems: 'center',
  },

  playButton: {
    width: 60,
    height: 60
  },

  skipButton: {
    width: 30,
    height: 30
  },

  shuffleRepeatButton: {
    width: 25,
    height: 20
  },

  bottomSymbols: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  shareAndQue: {
    flexDirection: 'row',
    gap: 20,
    alignItems: 'center'
  },

  discover: {
    marginTop: 20,
    paddingTop: 20,
    backgroundColor: "lightgrey",
    opacity: 60,
    borderRadius: 20,
    gap: 20
  },

  discoverText: {
    color: 'grey',
    fontWeight: 'bold',
    paddingLeft: 20
  },

  discoverImage: {
    width: '100%',
    height: 320,
    borderRadius: 20
  }

});
