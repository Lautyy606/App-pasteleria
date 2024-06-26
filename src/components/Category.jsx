import { Pressable, StyleSheet, Text } from 'react-native'
import React from 'react'
import Card from "./Card";
import { useDispatch } from 'react-redux';
import { setCategorySelected } from '../features/Shop/shopSlice';

const Category = ({category, navigation}) => {

  const dispatch = useDispatch()

  return (
    <Card>
      <Pressable onPress={()=>{
        dispatch(setCategorySelected(category))
        navigation.navigate('ItemListCategory', {category})}}>
        <Text style={styles.text}>{category}</Text>
      </Pressable>
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
        fontSize: 20,
        fontFamily: 'Montserrat',
        textAlign: 'center',
        marginTop: 13,
    }
})