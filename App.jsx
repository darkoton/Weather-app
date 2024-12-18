import { StyleSheet, View, StatusBar } from 'react-native';
import Top from "./components/top/index"
import Bottom from "./components/bottom/index"

export default function App() {
  return (
    <View style={styles.container}>
      <Top />
      <Bottom />
      <StatusBar backgroundColor="rgba(0,0,0,1)" translucent={true} hidden={true} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
