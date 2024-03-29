import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const styles = StyleSheet.create({
  container: {
    padding: 5,
  },
});

const ClipButton = ({ onPress, enabled }) => {
  const name = enabled ? 'star' : 'star-o';
  const colorOption = () => {
    if (name == 'star') {
      color = '#ffd700';
    } else {
      color = 'grey';
    }
    return color;
  };

  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <FontAwesome name={name} size={40} color={colorOption()} />
    </TouchableOpacity>
  );
};

export default ClipButton;
