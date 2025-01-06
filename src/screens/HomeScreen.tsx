// src/screens/HomeScreen.tsx

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Chào mừng đến với Trang Homepage!</Text>
      <Text style={styles.text}>Ứng dụng React Native với TypeScript.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 24,
    marginBottom: 10,
    textAlign: 'center',
  },
});

export default HomeScreen;
