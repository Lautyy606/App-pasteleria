import { StyleSheet, View, FlatList } from 'react-native'
import React from 'react'
import Category from "../components/Category";
import categories from "../data/categories.json";
import Counter from "../components/Counter";

const Home = ({navigation}) => {

  return (
    <View style={styles.flatListContainer}>
      <Counter/>
      <FlatList 
        showsVerticalScrollIndicator={false}
        keyExtractor={item => item}
        data={categories}
        renderItem = {({item}) => 
          <Category 
            navigation={navigation} 
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