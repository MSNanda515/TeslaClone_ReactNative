import { StyleSheet, Text, View } from 'react-native';
import CarModel from "./components/CarModelView";

export default function App() {
  return (
    <View style={styles.container}>
      <CarModel/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
