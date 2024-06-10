import { StyleSheet, Text, View, Pressable, FlatList } from 'react-native'
import React from 'react'
import CartItem from "../components/CartItem";
import CartData from "../data/cart.json";

const Cart = () => {
    const total = CartData.reduce((acumulador, currentItem) => 
    acumulador += currentItem.price * currentItem.quatity, 0)

    let total2 = 0
    for (const currentItem of CartData) {
        total2 += currentItem.price * currentItem.quantity
    }

  return (
    <View style={styles.container}>
      <FlatList
        data={CartData}
        keyExtractor={cartItem => cartItem.id}
        renderItem={({item}) => {
            return (
                <CartItem
                    cartItem={item}
                />
            )
        }} 
      />
      <View style={styles.totalContainer}>
        <Pressable>
            <Text>
                Confirmar
            </Text>
        </Pressable>
      </View>
    </View>
  )
}

export default Cart

const styles = StyleSheet.create({})