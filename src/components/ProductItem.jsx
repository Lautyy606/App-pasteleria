import { Image, Pressable, StyleSheet, Text } from 'react-native'
import React from 'react'
import Card from './Card'
import { useDispatch } from 'react-redux';
import { setIdSelected } from '../features/Shop/shopSlice';


const ProductItem = ({product, navigation = () => {}}) => {

  const dispatch = useDispatch()

  return (
    <Card style={styles.productCard}>
      <Pressable onPress={ () => {
        dispatch(setIdSelected(product.title))
        navigation.navigate('ItemDetail', {productId: product.id})}}>
        <Text style={styles.textCategory}>{product.title}</Text>
        <Image
            rensizeMode='cover'
            style={styles.image}
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