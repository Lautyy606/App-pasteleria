import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Card from "./Card";

const Category = ({category}) => {
  return (
    <Card>
      <Text style={styles.text}>{category}</Text>
    </Card>
  )
}

export default Category

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#D9D7F1',
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