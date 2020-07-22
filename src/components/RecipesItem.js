import React from 'react';
import {Text, Image, View, StyleSheet, TouchableOpacity} from 'react-native';

const imgUrl = "https://spoonacular.com/recipeImages/";

export default ({ navigation, item }) => {
  return (
    <TouchableOpacity onPress={() => navigation.navigate("RecipeDetail", { id: item.id }) }>
      <View style={styles.container}>
        <Image style={styles.picture} source={{uri: imgUrl + item.id + "-90x90.jpg"}}/>
        <Text style={styles.title}>{item.title}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  title: {
    marginTop: 10,
    marginLeft: 10,
    fontWeight: "bold",
  },
  picture: {
    width: 100,
    height: 100,
  },
});
