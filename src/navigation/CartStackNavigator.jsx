import { StyleSheet, Text, View } from 'react-native'
import Cart from "../screens/Cart";
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator()

const CartStack = () => {
  return (
    <Stack.Navigator
        initialRouteName="CartScreen"
        screenOptions={{
            headerShown: false
        }}
    >
        <Stack.Screen name="CartScreen" component={Cart} />
    </Stack.Navigator>
  )
}

export default CartStack;

const styles = StyleSheet.create({})