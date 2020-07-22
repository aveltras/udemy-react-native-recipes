import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

export default ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Detail</Text>
      <Button onPress={() => navigation.goBack()} title="Back to list"/>
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
