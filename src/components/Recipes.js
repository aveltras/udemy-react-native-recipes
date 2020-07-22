import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {View, FlatList, Text, StyleSheet, Button} from 'react-native';
import {fetchRecipes} from '../api/recipes';
import {getRecipes} from '../redux/selectors';

import RecipesItem from './RecipesItem';

export default ({ navigation }) => {

  const dispatch = useDispatch();
  const recipes = useSelector(getRecipes);
  
  useEffect(() => {
    fetchRecipes(dispatch);
  }, []);

  const renderItem = ({item}) => <RecipesItem navigation={navigation} item={item} />;
  
  return (
    <View style={styles.container}>
      <FlatList
        data={recipes}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        ItemSeparatorComponent={() => <View style={styles.separator}></View>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  separator: {
    height: 2,
    backgroundColor: "#ccc",
  },
});
