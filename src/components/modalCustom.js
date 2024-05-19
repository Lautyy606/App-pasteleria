import { StyleSheet, Text, View, Modal, Button } from 'react-native'
import React from 'react'

const ModalCustom = ({modalVisible, itemSelected, handleDelete, handleCancelModal}) => {
  return (
      <Modal visible={modalVisible} animationType='slide' transparent={true}>
        <View style={styles.modalStyles}>
          <View style={styles.modalContainer}>
            <View style={styles.textContainer}>
              <Text>Seguro que quieres borrar:</Text>
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.modalText}>{itemSelected.value}</Text>
            </View>
            <View style={styles.modalBtn}>
              <Button title='Borrar' onPress={handleDelete}/>
              <Button title='Cancelar' onPress={handleCancelModal}/>
            </View>
          </View>
        </View>
      </Modal>
  )
}

export default ModalCustom

const styles = StyleSheet.create({
      modalStyles: {
        flex: 1,
        backgroundColor: '#E3E3E372',
        alignItems: 'center',
        justifyContent: 'center',
      },
      modalContainer: {
        backgroundColor: '#E1F2FB',
        width: "55%",
        alignItems: 'center',
        gap: 12,
        paddingVertical: 15,
        borderRadius: 10,
      },
      modalText: {
        fontWeight: "bold"
      },
      modalBtn: {
        flexDirection: 'row',
        gap: 12,
      },
})