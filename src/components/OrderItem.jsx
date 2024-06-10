import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';

const OrderItem = ({ order }) => {
    const total = order.items.reduce(
        (acc, currentItem) => (acc += currentItem.price * currentItem.quantity), 
        0
    )

  return (
    <View style={styles.card} onPress={() => {}}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>
            {new Date(order.createdAt).toLocaleString()}
        </Text>
        <Text style={styles.text2}>${total}</Text>
      </View>
      <Ionicons name="search" size={24} color="black" />
    </View>
  )
}

export default OrderItem

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