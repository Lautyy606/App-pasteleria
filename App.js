import { StyleSheet, View } from 'react-native'
import Home from "./src/screens/Home";
import React from 'react'
import Header from './src/components/Header';

const App = () => {
  return (
    <View style={styles.container}>
      <Header title={"Dulzura Infinita"}/>
      <Home />
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