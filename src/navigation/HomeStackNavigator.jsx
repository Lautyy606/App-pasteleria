import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from "react";
import Home from "../screens/Home";
import ItemListCategory from '../screens/ItemListCategory'
import ItemDetail from '../screens/ItemDetail'
import Header from '../components/Header';
import { StyleSheet } from 'react-native';


const Stack = createNativeStackNavigator()

const HomeStackNavigator = () => {
    return (
        <Stack.Navigator 
            initialRouteName='Home'
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen
                name='Home'
                component={Home}
            />
            <Stack.Screen
                name='ItemListCategory'
                component={ItemListCategory}
            />
            <Stack.Screen
                name='ItemDetail'
                component={ItemDetail}
            />
        </Stack.Navigator>
    )
}

export default HomeStackNavigator

const styles = StyleSheet.create({})