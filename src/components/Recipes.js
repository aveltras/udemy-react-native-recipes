import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

export default ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>List</Text>
      <Button onPress={() => navigation.navigate("RecipeDetail") } title="Go Detail" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
