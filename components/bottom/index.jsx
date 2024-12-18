import { View, Text, Image, StyleSheet } from 'react-native'
import { useFonts, Ubuntu_500Medium, Ubuntu_400Regular, Ubuntu_300Light } from '@expo-google-fonts/ubuntu';
import { gumVertical, gumHorizontal } from '../../utils/responsive.js'
import Plus from './assets/Plus.jsx'

export default function BottomPanel() {

  let [fontsLoaded] = useFonts({
    Ubuntu_300Light,
    Ubuntu_400Regular,
    Ubuntu_500Medium
  });

  if (!fontsLoaded) {
    return null;
  }

  return <View style={styles.container}>

    <View style={styles.button}>
      <Plus />
    </View>

    <View style={styles.header}>
      <Text style={styles.time}>Today</Text>
      <Text style={styles.city}>Lucknow, Uttar Pradesh</Text>
    </View>

    <View style={styles.cards}>
      <View style={styles.card}>
        <Text style={styles.cardTime}>
          Now
        </Text>

        <Image source={require('./assets/w-icon.png')} />

        <View style={styles.valueBody}>
          <Text style={styles.value}>22</Text>
          <Text style={styles.valueSymbol}>°</Text>
        </View>
      </View>
      <View style={styles.card}>
        <Text style={styles.cardTime}>
          Now
        </Text>

        <Image source={require('./assets/w-icon.png')} />

        <View style={styles.valueBody}>
          <Text style={styles.value}>22</Text>
          <Text style={styles.valueSymbol}>°</Text>
        </View>
      </View>
      <View style={styles.card}>
        <Text style={styles.cardTime}>
          Now
        </Text>

        <Image source={require('./assets/w-icon.png')} />

        <View style={styles.valueBody}>
          <Text style={styles.value}>22</Text>
          <Text style={styles.valueSymbol}>°</Text>
        </View>
      </View>
      <View style={styles.card}>
        <Text style={styles.cardTime}>
          Now
        </Text>

        <Image source={require('./assets/w-icon.png')} />

        <View style={styles.valueBody}>
          <Text style={styles.value}>22</Text>
          <Text style={styles.valueSymbol}>°</Text>
        </View>
      </View>
      <View style={styles.card}>
        <Text style={styles.cardTime}>
          Now
        </Text>

        <Image source={require('./assets/w-icon.png')} />

        <View style={styles.valueBody}>
          <Text style={styles.value}>22</Text>
          <Text style={styles.valueSymbol}>°</Text>
        </View>
      </View>
    </View>
  </View>
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    backgroundColor: "#fff",
    paddingTop: gumVertical(55),
    paddingHorizontal: gumHorizontal(32),
    paddingBottom: gumVertical(55)
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: gumVertical(27)
  },
  time: {
    fontFamily: 'Ubuntu_500Medium',
    fontWeight: 500,
    fontSize: gumHorizontal(20),
    color: '#000'
  },
  city: {
    fontFamily: 'Ubuntu_400Regular',
    fontWeight: 400,
    fontSize: gumHorizontal(12),
    color: '#000'
  },
  cards: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  card: {
    alignItems: 'center'
  },
  cardTime: {
    fontFamily: 'Ubuntu_400Regular',
    fontSize: gumHorizontal(10),
    color: '#000',
    fontWeight: 400,
    marginBottom: gumVertical(14)
  },
  valueBody: {
    marginTop: gumVertical(10),
    flexDirection: 'row'
  },
  value: {
    fontSize: gumHorizontal(10),
    color: '#000',
    fontFamily: 'Ubuntu_400Regular',
  },
  valueSymbol: {
    fontSize: gumHorizontal(10),
    color: '#000',
    fontFamily: 'Ubuntu_300Light'
  },
  button: {
    position: 'absolute',
    borderRadius: 100,
    padding: 15,
    backgroundColor: '#fff',
    top: '0%',
    right: gumHorizontal(32),
    transform: 'translateY(-25%)',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.00,

    elevation: 24,
  }
})