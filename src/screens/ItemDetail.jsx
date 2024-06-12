import { StyleSheet, Text, View, Button, Image, useWindowDimensions } from 'react-native'
import React from 'react'
import { useEffect, useState } from "react";
import { images } from "../data/images";
import { useGetProductByIdQuery } from '../services/shopService';
import { useDispatch } from 'react-redux';
import { addCartItem } from '../features/Cart/cartSlice';

const ItemDetail = ({ route, navigation }) => {

    const dispatch = useDispatch()
    const {width, height} = useWindowDimensions()
    const [orientation, setOrientation] = useState("vertical")

    const {productId: idSelected} = route.params

    const {data: product, error, isLoading} = useGetProductByIdQuery(idSelected)

    useEffect(() => {
        if(width > height) setOrientation("horizontal")
        else setOrientation("vertical")
    }, [width, height])

    const handleAddCart = () => {
        dispatch(addCartItem({...product, quantity: 1}))
    }
    const imageSource = product ? images[product.images] : null

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
                source={imageSource}
                />
                <View style={orientation === "vertical" ? styles.textContainer 
                : styles.textContainerHorizontal}>
                    <Text>{product.title}</Text>
                    <Text>{product.description}</Text>
                    <Text>${product.price}</Text>
                    <Button title="Agregar al carrito" onPress={handleAddCart}></Button>
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