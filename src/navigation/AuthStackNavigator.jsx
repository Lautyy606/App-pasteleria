import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from "react";
import Home from "../screens/Home";
import ItemListCategory from '../screens/ItemListCategory'
import ItemDetail from '../screens/ItemDetail'
import Header from '../components/Header';
import { StyleSheet } from 'react-native';
import LoginScreen from '../screens/LoginScreen';
import SingupScreen from '../screens/SingupScreen';


const Stack = createNativeStackNavigator()

const AuthStackNavigator = () => {
    return (
        <Stack.Navigator 
            initialRouteName='Login'
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen
                name='Login'
                component={LoginScreen}
            />
            <Stack.Screen
                name='Signup'
                component={SingupScreen}
            />
        </Stack.Navigator>
    )
}

export default AuthStackNavigator;

const styles = StyleSheet.create({})