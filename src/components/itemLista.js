import { StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native'
import React from 'react'

const ItemLista = ({itemList, handleModal}) => {
  return (
    <View>
        <FlatList
            style={styles.flatlist}
            data={itemList}
            keyExtractor={task => task.id.toString()}
            renderItem={({ item }) => 
            <TouchableOpacity 
                style={styles.card}
                onPress={()=> handleModal(item)}
            >
                <Text style={styles.taskText}>{item.value}</Text>
            </TouchableOpacity> 
            }
        />      
    </View>
  )
}

export default ItemLista

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#F3DFE3',
        marginTop: 15,
        marginVertical: 10,
        paddingTop: 8,
        paddingBottom: 8,
        paddingHorizontal: 100,
        borderRadius: 10,
        width: "100%",
      },
      taskText: {
        fontSize: 15,
        fontFamily: 'sans-serif-medium',
        fontWeight: 'normal',
        textAlign: 'center', 
      },
})