import { View, StyleSheet, Text } from "react-native"
import Burger from "./icons/Burger.jsx"
import Search from "./icons/Search.jsx"
import { useFonts, Ubuntu_400Regular } from '@expo-google-fonts/ubuntu';
import { gumVertical, gumHorizontal } from '../../utils/responsive.js'

export default function Header() {
  let [fontsLoaded] = useFonts({
    Ubuntu_400Regular,
  });

  if (!fontsLoaded) {
    return null;
  }

  return <View style={styles.header} >
    <Burger />
    <Text style={styles.title}>Lucknow</Text>
    <Search />
  </View>
}

const styles = StyleSheet.create({
  header: {
    marginTop: gumVertical(66),
    paddingHorizontal: gumHorizontal(24),
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  title: {
    color: '#fff',
    fontWeight: 400,
    fontSize: gumHorizontal(22),
    letterSpacing: gumHorizontal(0.1),
    textAlign: 'center',
    fontFamily: 'Ubuntu_400Regular'
  }
})