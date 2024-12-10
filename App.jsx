import { StyleSheet, View, StatusBar } from 'react-native';
import Top from "./components/top/index"
import Bottom from "./components/bottom/index"

export default function App() {
  return (
    <View style={styles.container}>
      <Top />
      <Bottom />
      <StatusBar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
