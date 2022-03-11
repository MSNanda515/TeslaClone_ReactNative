import { StyleSheet, Text, View } from 'react-native';
import CarModel from "./components/CarModelView/CarModel";
import Constants from "./assets/constants";

export default function App() {
  return (
    <View style={styles.container}>
      {Constants.carDetails.map((carDetail, key) => (
          <CarModel name={carDetail.name} tagline={carDetail.tagline} taglineCta={carDetail.taglineCta}
                    image={carDetail.image} key={key}/>
      ))}

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
