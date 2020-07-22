import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';

import store from './src/redux/store';
import Recipe from './src/components/Recipe';
import Recipes from './src/components/Recipes';

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <Recipes />
        <Recipe />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
