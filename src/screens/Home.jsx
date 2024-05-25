import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'
import Category from "../components/Category";
import categories from "../data/categories.json";
import products from "../data/products.json";

const Home = ({setCategorySelected}) => {

  return (
    <View style={styles.flatListContainer}>
      <FlatList 
        showsVerticalScrollIndicator={false}
        keyExtractor={item => item}
        data={categories}
        renderItem = {({item}) => 
          <Category 
            selectCategory={setCategorySelected} 
            category={item}
          />
        }
      />
    </View>
  )
}

const styles = StyleSheet.create({
  flatListContainer: {
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export default Home