import React from "react";
import { StyleSheet, View} from "react-native";
import Header from "../components/Header";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeStackNavigator from "./HomeStackNavigator";
import { FontAwesome6 } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
// import CartTemp from "../screens/CartTemp";
// import OrdersTemp from "../screens/OrdersTemp";
import CartStack from "./CartStackNavigator";
import OrderStack from "./OrderStackNavigator";


const Tab = createBottomTabNavigator()

const BottomTabNavigator = () => {
    return (
        <Tab.Navigator
            screenOptions={({route}) => (
            {
                header: () => { 
                    return <Header title={"Dulzura Infinita"}/>
                },
                tabBarShowLabel: false,
                tabBarStyle: styles.tabBar,
            }
        )}
        >
            <Tab.Screen
                name= "Shop"
                component={HomeStackNavigator}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <View>
                                <Ionicons name="storefront-outline" size={24} color="black" />
                            </View>
                        )
                    }
                }}
            />
            <Tab.Screen
                name="Cart"
                component={CartStack}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <View>
                                <FontAwesome6 name="cart-shopping" size={24} color="black" />
                            </View>
                        )
                    }
                }}
            />
            <Tab.Screen
                name="Orders"
                component={OrderStack}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <View>
                                <Ionicons name="receipt-sharp" size={24} color="black" />
                            </View>
                        )
                    }
                }}
            />
        </Tab.Navigator>
    )
}

export default BottomTabNavigator

const styles = StyleSheet.create({
    tabBar: {
        shadowColor: "black",
        elevation: 4,
        borderRadius: 10,
        height: 60,
    }
})