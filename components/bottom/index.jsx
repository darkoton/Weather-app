import { View, Text, Image, StyleSheet } from 'react-native'
import { useFonts, Ubuntu_500Medium, Ubuntu_400Regular, Ubuntu_300Light } from '@expo-google-fonts/ubuntu';
import { gumVertical, gumHorizontal } from '../../utils/responsive.js'

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
    backgroundColor: "#fff",
    paddingTop: gumVertical(55),
    paddingHorizontal: gumHorizontal(32),
    paddingBottom: gumVertical(28)
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
  }
})