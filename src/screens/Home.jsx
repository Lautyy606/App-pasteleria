import { StyleSheet, View, FlatList } from 'react-native'
import React from 'react'
import Category from "../components/Category";
// import Counter from "../components/Counter";
import { useGetCategoriesQuery } from '../services/shopService';

const Home = ({navigation}) => {
  const {data: categories, error, isLoading} = useGetCategoriesQuery()

  return (
    <View style={styles.flatListContainer}>
      {/* <Counter/> */}
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