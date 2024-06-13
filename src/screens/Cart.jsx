import { StyleSheet, Text, View, Pressable, FlatList } from 'react-native'
import React from 'react'
import CartItem from "../components/CartItem";
import { useSelector } from 'react-redux';
import { usePostOrderMutation } from "../services/shopService"

const Cart = () => {
    const {items: CartData, total} = useSelector(state => state.cart.value)

    const [triggerPostOrder, result] = usePostOrderMutation()

    const onConfirmOrder = () => {
      triggerPostOrder({items: CartData, user: 'Lautaro', total})
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
        <Pressable onPress={onConfirmOrder}>
            <Text>
                Confirmar
            </Text>
        </Pressable>
        <Text>Total: ${total}</Text>
      </View>
    </View>
  )
}

export default Cart

const styles = StyleSheet.create({})