import { StyleSheet, View } from 'react-native'
import Home from "./src/screens/Home";
import React, { useState } from 'react'
import Header from './src/components/Header';
import ItemListCategory from './src/screens/ItemListCategory';
import { useFonts } from "expo-font";
import * as SplashScreen from 'expo-splash-screen';
import { useCallback } from "react";

const App = () => {
  const [fontsLoaded, fontError] = useFonts({
    'Dancing': require('./assets/Montserrat-Regular.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  const [categorySelected, setCategorySelected] = useState("")

  return (
    <View style={styles.container}>
      <Header title={"Dulzura Infinita"}/>
      {categorySelected ? 
      <ItemListCategory categorySelected={categorySelected}
      setCategorySelected ={setCategorySelected}/> 
      : 
      <Home setCategorySelected={setCategorySelected}/>
      }
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F9F9F9'
  }
})