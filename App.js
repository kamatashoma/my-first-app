import { grey } from 'ansi-colors';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemContainer: {
    height: 100,
    width: '100%',
    borderWidth: 1,
    flexDirection: 'row',
  },
  lightContainer: {
    backgroundColor: 'white',
    flex: 1,
    padding: 10,
  },
  leftContainer: {
    backgroundColor: 'red',
    width: 100,
  },
  text: {
    fontSize: 16,
  },
  source: {
    fontSize: 12,
    color: 'grey',
  },
});

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.itemContainer}>
        <View style={styles.leftContainer}>
          <Image
            style={{ width: 100, height: 100 }}
            source={{
              uri: 'https://picsum.photos/200/300',
            }}
          />
        </View>
        <View style={styles.lightContainer}>
          {/* numberOfLinesは何行で切るか指定できる */}
          <Text numberOfLines={3} style={styles.text}>
            at node_modules/react-native/Libraries/Utilities/HMRClient.js:320:31
            in showCompileError at
            node_modules/react-native/Libraries/Utilities/HMRClient.js:227:26 in
            client.on$argument_1 at
            node_modules/react-native/Libraries/WebSocket/WebSocket.js:231:8 in
            _eventEmitter.addListener$argument_1
          </Text>
          <Text style={styles.source}>react news</Text>
        </View>
      </View>
    </View>
  );
}
