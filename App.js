import { Platform, SafeAreaView, StatusBar, StyleSheet, View } from 'react-native'
import Home from "./src/screens/Home";
import React, { useState } from 'react'
import Header from './src/components/Header';
import ItemListCategory from './src/screens/ItemListCategory';
import { useFonts } from "expo-font";
import * as SplashScreen from 'expo-splash-screen';
import { useCallback } from "react";
import ItemDetail from './src/screens/ItemDetail';

const App = () => {
  const [fontsLoaded, fontError] = useFonts({
    'Dancing': require('./assets/DancingScript-Bold.ttf'),
    'Josefin': require('./assets/JosefinSans-Regular.ttf'),
    'Montserrat': require('./assets/Montserrat-Regular.ttf')
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  const [categorySelected, setCategorySelected] = useState("")
  const [itemSelected, setItemSelected] = useState("")
  

  return (
    <SafeAreaView style={styles.container}>
      <Header title={"Dulzura Infinita"}/>
      {!categorySelected ? 
      <Home setCategorySelected={setCategorySelected}/>
      : 
      
      !itemSelected ?
      
      <ItemListCategory categorySelected={categorySelected}
      setCategorySelected ={setCategorySelected} 
      setItemSelected={setItemSelected}/>
      :
      <ItemDetail
        idSelected={itemSelected}
        setProductSelected={setItemSelected}
      />
      }
    </SafeAreaView>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F9F9F9',
    // paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
  },
})