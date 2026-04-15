import { StyleSheet, View, Text } from 'react-native';

export default function DiagnoseScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Diagnose Screen under construction</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
  },
  text: {
    fontSize: 18,
    color: '#212121',
  },
});
