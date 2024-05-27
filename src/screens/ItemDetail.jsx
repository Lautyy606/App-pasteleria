import { StyleSheet, Text, View, Button, Image } from 'react-native'
import React from 'react'
import { useEffect, useState } from "react";
import products from "../data/products.json";

const ItemDetail = ({ idSelected, setProductSelected }) => {

    const [product, setProduct] = useState(null)

    useEffect(() => {
        const productSelected = products.find(
            (product) => product.id === idSelected
        )
        setProduct(productSelected)
    }, [idSelected])

  return (
    <View>
        <Button onPress={() => setProductSelected("")} title="Go back" />
        {product ? (
            <View>
                <Image 
                resizeMode='cover'
                style={styles.image}
                // source={{uri: product.images[0]}}
                />
                <View>
                    <Text>{product.title}</Text>
                    <Text>{product.description}</Text>
                    <Text>${product.price}</Text>
                    <Button title="Agregar al carrito"></Button>
                </View>
            </View>
        ) : null}
    </View>
  )
}

export default ItemDetail

const styles = StyleSheet.create({})