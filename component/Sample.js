import { styleSheets } from 'min-document';
import React from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexdirection: 'column',
  },
  box: {
    width: 100,
    heighy: 100,
  },
});

function Sample() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={[styles.box, { backgroundColor: 'red' }]} />
      <View style={[styles.box, { backgroundColor: 'blue' }]} />
      <View style={[styles.box, { backgroundColor: 'green' }]} />
    </SafeAreaView>
  );
}

export default Sample();
