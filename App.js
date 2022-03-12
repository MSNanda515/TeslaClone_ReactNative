import { StyleSheet, Text, View } from 'react-native';
import CarModel from "./components/CarModelView/CarModel";
import Constants from "./assets/constants";
import CarsList from "./components/CarsList/CarsList";
import Header from "./components/Header/Header";

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <CarsList />
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
