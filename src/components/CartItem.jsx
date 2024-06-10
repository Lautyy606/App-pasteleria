import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { FontAwesome6 } from '@expo/vector-icons';

const CartItem = ({ cartItem}) => {
  return (
    <View style={styles.card} onPress={() => {}}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>{cartItem.title} ({cartItem.quantity})</Text>
        <Text style={styles.text2}>{cartItem.brand}</Text>
        <Text style={styles.text2}>{cartItem.price}</Text>
      </View>
      <FontAwesome6 name="trash-can" size={24} color="black" />
    </View>
  )
}

export default CartItem

const styles = StyleSheet.create({
    card: {
        height: 100,
        padding: 10,
        margin: 10,
        borderWidth: 2,
        borderRadius: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: '#FAF4B7'
    },
    textContainer: {
        width: "70%",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "flex-start", 
    },
    text: {
        fontFamily: "Montserrat",
        fontSize: 18,
    },
    text2: {
        fontFamily: "Montserrat",
        fontSize: 13,
    }
})