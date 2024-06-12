import { StyleSheet, Text, View, FlatList } from 'react-native'
import React, { useState, useEffect } from 'react'
import ProductItem from "../components/ProductItem";
import Search from '../components/Search';
import { useGetProductsByCategoryQuery } from '../services/shopService';

const ItemListCategory = ({setCategorySelected = () => {}, navigation, route}) => {

    const [productsFiltered, setProductsFiltered] = useState([])
    const [keyword, setKeyword] = useState("")
    const {category : categorySelected} = route.params

    const {data: productsFetched, error: errorFromFetch, isLoading} = useGetProductsByCategoryQuery(categorySelected)

    useEffect(() => {
      if (!isLoading) {
        const productsFilter = productsFetched.filter(product => product.title.toLocaleLowerCase().includes(keyword))
          setProductsFiltered(productsFilter);
      }
    }, [keyword, categorySelected, productsFetched, isLoading])

  return (
    <View style={styles.flatListContainer}>
        <Search onSearch={setKeyword} goBack={() => navigation.goBack()}/>
        <FlatList
        keyExtractor={(producto) => producto.id}
        data={productsFiltered}
        renderItem={({item})=> <ProductItem product={item} navigation={navigation}/> }
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

export default ItemListCategory