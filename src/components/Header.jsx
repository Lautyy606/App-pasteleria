import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Header = ({title}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 35,
    fontFamily: 'sans-serif-medium',
    marginBottom: 25,
    backgroundColor: '#CDF0EA',
    width: '100%',
    height: 120,
    textAlign: 'center',
    paddingTop: 60
  }
})