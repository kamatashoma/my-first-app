import { grey } from 'ansi-colors';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  FlatList,
} from 'react-native';
import ListItem from './component/ListItem';
import articles from './dummies/articles.json';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
});

export default function App() {
  const items = articles.map((article, index) => {
    return (
      <ListItem
        imageurl={article.urlToImage}
        detail={article.title}
        author={article.author}
        key={index}
      />
    );
  });
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={articles}
        renderItem={({ item }) => (
          <ListItem
            imageurl={item.urlToImage}
            detail={item.title}
            author={item.author}
          />
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </SafeAreaView>
  );
}
