import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={[styles.box, {backgroundColor: 'green'}]}>
        <Text>Box 1</Text>
      </View>
      <View style={[styles.box, {backgroundColor: 'pink'}]}>
        <Text>Box 2</Text>
      </View>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    padding: 20,
    fontWeight: 'bold'
  }
});
