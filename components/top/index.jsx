import { View, StyleSheet, ImageBackground, Text } from "react-native"
import Header from '../header/index'
import { useFonts, Ubuntu_700Bold, Ubuntu_500Medium, Ubuntu_400Regular } from '@expo-google-fonts/ubuntu';
import { gumVertical, gumHorizontal } from '../../utils/responsive.js'

export default function Top() {

  let [fontsLoaded] = useFonts({
    Ubuntu_700Bold,
    Ubuntu_500Medium,
    Ubuntu_400Regular
  });

  if (!fontsLoaded) {
    return null;
  }

  return <ImageBackground source={require('./assets/bg.jpg')} style={styles.block}>
    <Header />
    <View style={styles.info}>
      <View style={styles.temperature}>
        <Text style={styles.temperatureValue}>20</Text>
        <Text style={styles.temperatureSymbol}>°</Text>
      </View>

      <Text style={styles.status}>Sunset, Clouds</Text>
    </View>
  </ImageBackground>
}

const styles = StyleSheet.create({
  block: {
    flexGrow: 1,
  },
  info: {
    flexGrow: 1,
    justifyContent: 'center',
    alignContent: 'center',
  },
  temperature: {
    textAlign: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: "start",
    marginBottom: gumVertical(20)
  },
  temperatureValue: {
    fontSize: gumHorizontal(99),
    fontFamily: 'Ubuntu_700Bold',
    color: '#fff',
  },
  temperatureSymbol: {
    fontFamily: 'Ubuntu_500Medium',
    fontSize: gumHorizontal(64),
    color: '#fff',
    marginTop: gumVertical(8)
  },
  status: {
    fontSize: gumHorizontal(22),
    fontFamily: 'Ubuntu_400Regular',
    color: '#fff',
    fontWeight: 400,
    textAlign: 'center'
  }
})

