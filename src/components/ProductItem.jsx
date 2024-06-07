import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Card from './Card'

const ProductItem = ({product, navigation = () => {}}) => {
  return (
    <Card style={styles.productCard}>
      <Pressable onPress={ () => navigation.navigate('ItemDetail', {productId: product.id})}>
        <Text style={styles.textCategory}>{product.title}</Text>
        <Image
            rensizeMode='cover'
            style={styles.image}
            // source={{uri: product.image[0]}}
        />
      </Pressable>
    </Card>
  )
}

export default ProductItem

const styles = StyleSheet.create({
    textCategory: {
        fontSize: 18,
        fontFamily: 'Montserrat',
        textAlign: 'center',
        marginTop: 12,
    }
})