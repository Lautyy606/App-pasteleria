import { StyleSheet, Text, View, FlatList } from 'react-native'
import React, { useState, useEffect } from 'react'
import products from "../data/products.json";
import ProductItem from "../components/ProductItem";
import Search from '../components/Search';

const ItemListCategory = ({categorySelected = "", setCategorySelected = () => {}, setItemSelected = () => {}}) => {

    const [productsFiltered, setProductsFiltered] = useState([])
    const [keyword, setKeyword] = useState("")

    useEffect(() => {
        const productsFiltered = products.filter(product => product.category === categorySelected)
        const productsFilter = productsFiltered.filter(product => product.title.toLocaleLowerCase().includes(keyword))
          setProductsFiltered(productsFilter);
    }, [keyword, categorySelected])

  return (
    <View style={styles.flatListContainer}>
        <Search onSearch={setKeyword} goBack={() => setCategorySelected("")}/>
        <FlatList
        keyExtractor={(producto) => producto.id}
        data={productsFiltered}
        renderItem={({item})=> <ProductItem product={item} setItemSelected={setItemSelected}/> }
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