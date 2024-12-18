import { View, StyleSheet, TextInput, Pressable, FlatList, Text, Dimensions } from "react-native";
import Search from "./icons/Search.jsx";
import { useFonts, Ubuntu_400Regular } from "@expo-google-fonts/ubuntu";
import { gumVertical, gumHorizontal } from "../../utils/responsive.js";
import { useRef, useState } from "react";

const language = Intl.DateTimeFormat().resolvedOptions().locale.split('-')[0];
const height = Dimensions.get('window').height

export default function Header() {
  let [fontsLoaded] = useFonts({
    Ubuntu_400Regular,
  });

  const searchInerval = useRef(null)
  const [cities, setCities] = useState([])

  function searchCity(text) {
    if (searchInerval.current) {
      clearInterval(searchInerval.current)
    }

    searchInerval.current = setTimeout(() => {
      fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${text}&limit=5&appid=${process.env.EXPO_PUBLIC_API_KEY}`)
        .then(r => r.json())
        .then(data => {
          console.log(data)
          setCities(data)
        })
    }, 1000)
  }

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.header}>
      <View style={styles.inputBody}>
        <TextInput
          style={styles.input}
          placeholder="Search city"
          onChangeText={searchCity}
        />



        <Pressable style={styles.searchIconBody}>
          <Search style={styles.searchIcon} />
        </Pressable>
      </View>
      <Text>
      </Text>
      {!!cities.length &&
        <FlatList style={styles.listResult}
          contentContainerStyle={styles.listResultContainer}
          data={cities}
          renderItem={ItemResult}
          ItemSeparatorComponent={() => <View style={styles.separator} />} />
      }

    </View>

  );
}

const styles = StyleSheet.create({
  header: {
    position: "relative",
    marginTop: gumVertical(66),
    paddingHorizontal: gumHorizontal(24),
    justifyContent: "space-between",
    alignItems: "center",
  },

  inputBody: {
    flexDirection: 'row',
    backgroundColor: "#ffffff",
    borderRadius: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  input: {
    paddingHorizontal: gumHorizontal(16),
    paddingVertical: gumHorizontal(10),
    fontSize: gumHorizontal(16),
    flex: 1
  },
  searchIcon: {
    color: "#000",
    marginRight: 20
  },
  listResult: {
    position: 'absolute',
    top: '80%',
    backgroundColor: '#fff',
    borderRadius: 8,
    width: '100%',
    maxHeight: height / 2.5
  },
  listResultContainer: {
    padding: 5
  },
  separator: {
    height: 5,
  },

});

function ItemResult({ item, onPress }) {
  return <Pressable style={itemStyles.item}>
    <Text style={itemStyles.name}>{item.local_names && item.local_names[language] ? item.local_names[language] : item.name}</Text>
    <Text style={itemStyles.country}>{item.country}</Text>
  </Pressable>
}

const itemStyles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: gumHorizontal(16),
    paddingVertical: gumHorizontal(2),
  },
  name: {
    flex: 1,
    fontSize: gumHorizontal(16)
  },
  country: {
    marginLeft: 1,
    fontSize: gumHorizontal(16)

  },
})
