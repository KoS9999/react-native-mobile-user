import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const IntroScreen = ({ navigation }: { navigation: any }) => {
  const [countdown, setCountdown] = useState(10); 
  useEffect(() => {
    if (countdown === 0) {
      navigation.replace('Home');
      return; 
    }

    const timer = setTimeout(() => {
      setCountdown(prevCountdown => prevCountdown - 1); 
    }, 1000); 

    return () => clearTimeout(timer);
  }, [countdown, navigation]); 

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Chào bạn! Đây là trang giới thiệu bản thân</Text>
      <Text style={styles.text}>Mình là Ngọc Thông</Text>
      <Text style={styles.text}>Tôi là một lập trình viên React Native</Text>
      <Text style={styles.countdown}>Đếm ngược: {countdown}s</Text>
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
    fontSize: 20,
    marginBottom: 10,
    textAlign: 'center',
  },
  countdown: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#ff0000',
    marginTop: 20,
  },
});

export default IntroScreen;
