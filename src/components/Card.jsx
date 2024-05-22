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
        height: 40,
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
        fontSize: 17,
        fontFamily: 'sans-serif-thin',
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 6,
    }
})


export default Card