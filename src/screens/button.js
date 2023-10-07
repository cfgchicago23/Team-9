import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const ButtonComponent = ({ title, onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'blue', // Customize the button style as needed
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginVertical: 10,
  },
  buttonText: {
    color: 'white', // Customize the text color as needed
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ButtonComponent;