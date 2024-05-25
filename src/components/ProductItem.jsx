import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Card from './Card'

const ProductItem = ({product}) => {
  return (
    <Card style={styles.productCard}>
        <Text style={styles.textCategory}>{product.title}</Text>
        <Image
            rensizeMode='cover'
            style={styles.image}
            // source={{uri: product.image[0]}}
        />
    </Card>
  )
}

export default ProductItem

const styles = StyleSheet.create({
    textCategory: {
        fontSize: 17,
        fontFamily: 'sans-serif-thin',
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 6,
    }
})