import React, {useEffect} from 'react';
import {View, Text, Image, Button, StyleSheet} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {fetchSelectedRecipe} from '../api/recipes';
import {getSelectedRecipe} from '../redux/selectors';

export default ({ route, navigation }) => {

  const dispatch = useDispatch();
  const {id} = route.params;

  const recipe = useSelector(getSelectedRecipe);
  
  useEffect(() => {
    fetchSelectedRecipe(dispatch, id);
  }, []);
  
  return (
    <View style={styles.container}>
      <Image source={{ uri: recipe.image }} resizeMode="cover" style={styles.picture}/>
      <Text style={styles.title}>{recipe.title}</Text>
      <View>
        {recipe.extendedIngredients.map(ingredient => <Text>{ingredient.name}</Text>)}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  picture: {
    height: 200,
  },
  title: {
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center",
    marginVertical: 20,
  },
});
