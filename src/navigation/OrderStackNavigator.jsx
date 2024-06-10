import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import OrderScreen from "../screens/Order";

const Stack = createNativeStackNavigator()

const OrderStack = () => {
  return (
    <Stack.Navigator
        initialRouteName="OrderScreen"
        screenOptions={{
            headerShown: false,
        }}
    >
        <Stack.Screen name="OrderScreen" component={OrderScreen} />
    </Stack.Navigator>
  )
}

export default OrderStack

const styles = StyleSheet.create({})