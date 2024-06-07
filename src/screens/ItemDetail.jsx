import { StyleSheet, Text, View, Button, Image, useWindowDimensions } from 'react-native'
import React from 'react'
import { useEffect, useState } from "react";
import products from "../data/products.json";

const ItemDetail = ({ route, navigation }) => {

    const [product, setProduct] = useState(null)
    const {width, height} = useWindowDimensions()
    const [orientation, setOrientation] = useState("vertical")

    const {productId: idSelected} = route.params

    useEffect(() => {
        if(width > height) setOrientation("horizontal")
        else setOrientation("vertical")
    }, [width, height])


    useEffect(() => {
        const productSelected = products.find(
            (product) => product.id === idSelected
        )
        setProduct(productSelected)
    }, [idSelected])

  return (
    <View>
        <Button onPress={() => navigation.goBack()} title="Go back" />
        {product ? (
            <View 
            style={orientation === "vertical"? styles.mainContainer 
            : styles.mainContainerHorizontal}>
                <Image 
                resizeMode='cover'
                style={orientation === "vertical"? styles.image 
                : styles.imageHorizontal}
                // source={{uri: product.images[0]}}
                />
                <View style={orientation === "vertical" ? styles.textContainer 
                : styles.textContainerHorizontal}>
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

const styles = StyleSheet.create({
    mainContainer: {
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start",
        padding: 10,
    },
    mainContainerHorizontal: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "flex-start",
        padding: 10,
        gap: 10,
    },
    image: {
        width: '100%',
        height: 250,
    },
    imageHorizontal: {
        width: '45%',
        height: 200,
    },
    textContainer: {
        flexDirection: "column",
    },
    textContainerHorizontal: {
        width: '50%',
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start",
        gap: 10,
    }
})