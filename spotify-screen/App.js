import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image source={require("./assets/keyboard_arrow_down.png")} />
        <Text style={styles.albumText}>Et godt stup i grunt vann</Text>
        <Image style={styles.symbols} source={require("./assets/more.png")} />
      </View>
      <View style={styles.albumArt}>
        <Image style={styles.albumCover} source={require("./assets/album.jpeg")} />
      </View>
      <View style={styles.controls}>
        <View style={styles.songInfoContainer}>
          <View style={styles.songInfo}>
            <Text style={styles.titleText}>
              Rosa Sky
            </Text>
            <Text style={styles.artistText}>
              Cezinando
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
          <Image style={styles.skipButton} source={require('./assets/skip_forward.png')} />
          <Image style={styles.playButton} source={require('./assets/play_circle.png')} />
          <Image style={styles.skipButton} source={require('./assets/skip_backwards.png')} />
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
    alignItems: "center"
  },

  songInfo: {
    gap: 5,
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
    paddingTop: 10,
    backgroundColor: "#18189e",
    borderRadius: 20,
    gap: 10
  },

  discoverText: {
    fontWeight: 'bold',
    paddingLeft: 20,
    fontSize: 20,
    color: 'white'
  },

  discoverImage: {
    width: '100%',
    height: 320,
    borderRadius: 20
  }

});
