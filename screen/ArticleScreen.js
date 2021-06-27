import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import { addClip, deleteClip } from '../store/action/user';

import { WebView } from 'react-native-webview';
import { useDispatch } from 'react-redux';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default ArticleScreen = ({ route }) => {
  const { article } = route.params;
  const dispatch = useDispatch();

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          dispatch(addClip({ clip: article }));
        }}
      >
        <Text style={{ margin: 10, fontSize: 30 }}>ADD_CLIP</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          dispatch(deleteClip({ clip: article }));
        }}
      >
        <Text style={{ margin: 10, fontSize: 30 }}>DELETE_CLIP</Text>
      </TouchableOpacity>
      <WebView source={{ uri: article.url }} />
    </SafeAreaView>
  );
};
