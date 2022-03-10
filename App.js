import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.carContainer}>
        <View>
          <View style={styles.titles}>
            <Text styles={styles.title}>Model S</Text>
            <Text styles={styles.subtitle}>Starting at $69,420</Text>
          </View>

        </View>
      </View>
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
  carContainer: {
    width: '100%',
    height: '100%',
  },
  titles: {
    marginTop: '30%',
    width: '100%',
    alignItems: 'center'
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold'
  },
  subtitle: {
    fontSize: 16,
    color: '#5c5e62'
  }
});
