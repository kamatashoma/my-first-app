import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
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
    justifyContent: 'space-between',
    // ちょうど良い行間にする
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
  box: {
    width: 100,
    height: 100,
  },
});

const ListItem = (props) => {
  return (
    <TouchableOpacity style={styles.container} onPress={props.onPress}>
      <View style={styles.itemContainer}>
        <View style={styles.leftContainer}>
          {!!props.imageurl && (
            <Image
              style={{ width: 100, height: 100 }}
              source={{
                uri: props.imageurl,
              }}
            />
          )}
        </View>
        <View style={styles.lightContainer}>
          {/* numberOfLinesは何行で切るか指定できる */}
          <Text numberOfLines={3} style={styles.text}>
            {props.detail}
          </Text>
          <Text style={styles.source}>{props.author}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ListItem;
