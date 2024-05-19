import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Button, TextInput } from 'react-native'
import React from 'react'

const TaskInput = ({textItem, handleChangeText, addItem}) => {
  return (
      <View style={styles.taskInput}>
        <StatusBar style="auto" />
        <TextInput 
          style={styles.input}
          onChangeText={handleChangeText}
          value={textItem}
        />
        <Button title="Añadir" color="#E9B2BC" onPress={addItem}/>    
      </View>
  )
}

export default TaskInput

const styles = StyleSheet.create({
    taskInput: {
        backgroundColor: '#E1F2FB',
        alignItems: 'center',
      },
    input: {
        fontSize: 20,
        borderBottomWidth: 0.5,
        marginBottom: 25,
        marginTop: 50,
        width: 130,
      },
})