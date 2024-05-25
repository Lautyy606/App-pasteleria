import { StyleSheet, TextInput, View, Pressable, Text } from 'react-native'
import React, {useState} from 'react'
import { Feather } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

const Search = ({onSearch = () => {}, goBack = () => {} }) => {

    const [input, setInput] = useState("");
    const [error, setError] = useState("");

    const search = () => {
      const expresion = /\d/;
      if (expresion.test(input)) {
        setError("Solo utilizar letras");
      } else {
        setError("")
        onSearch(input)
      }
    }

    const removeInput = () => {
      setInput("")
      setError("")
    }

  return (
    <View>
      <View style={styles.container}>
        <TextInput 
          style={styles.input}
          value={input}
          onChangeText={setInput}
          placeholder='Buscar producto...'
        />
        <Pressable onPress={search}>
          <Feather name="search" size={22} color="black" />
        </Pressable>
        <Pressable onPress={removeInput}>
          <FontAwesome name="remove" size={22} color="black" />
        </Pressable>
        <Pressable onPress={goBack}>
          <Ionicons name="arrow-back-sharp" size={22} color="black" />
        </Pressable>
      </View>
      {error ? <Text style={styles.errorText}>{error}</Text> : null}
    </View>
  )
}

export default Search

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '90%',
        paddingBottom: 20,
    },
    input: {
        color: 'black',
        backgroundColor: '#FAF4B7',
        borderRadius: 8,
        padding: 10,
        borderWidth: 1,
        borderColor: '#FAF4B7',
        width: '80%',
        fontSize: 20,
    },
    errorText: {
      color: 'red',
      fontSize: 15,
    }
})