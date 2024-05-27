import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Card = ({children}) => {
  return (
    <View style={styles.container}>
      {children}
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F7DBF0',
        width: 200,
        height: 55,
        marginTop: 15,
        marginBottom: 15,
        borderRadius: 5,
        shadowColor: "#000",
        shadowOffset:{
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,
        elevation: 4,
        borderRadius: 5,
    },
    text: {
      fontSize: 20,
      fontFamily: 'Josefin',
      textAlign: 'center',
      marginTop: 15,
  }
})


export default Card