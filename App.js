import { StyleSheet, Text, View } from 'react-native';
import React, {useState} from 'react';
import ModalCustom from "./src/components/modalCustom";
import TaskInput from "./src/components/input";
import ItemLista from "./src/components/itemLista";

const taskProductos = [
  {id: 1, value: "Torta chica"},
  {id: 2, value: "Torta grande"},
  {id: 3, value: "Torta Oreo"},
  {id: 4, value: "Chocotorta"}
]

 function App() {

  const [textItem, setTextItem] = useState("")
  const [itemList, setItemList] = useState([])

  const [modalVisible, setModalVisible] = useState(false)
  const [itemSelected, setItemSelected] = useState({})

  const handleChangeText = (text) => setTextItem(text)

  const addItem = () => {
      setItemList(currentValue => [
        ...currentValue,
        {id: Math.random().toString(), value: textItem}
      ])
      setTextItem("")
  }

  const handleModal = (item) => {
    setModalVisible(true)
    setItemSelected(item)
  }

  const handleDelete = () => {
    const filter = itemList.filter(task => task !== itemSelected)
    setItemList(filter)
    setModalVisible(false)
  }

  const handleCancelModal = () => {
    setModalVisible(false)
    setItemSelected({})
  }

  return (
    <View style={styles.container}>
      <TaskInput 
        addItem={addItem}
        handleChangeText={handleChangeText}
        textItem={textItem}
      />

      <View>
        <Text style={styles.titulo}>Creando App de pasteleria</Text>
      </View>
      
      <ItemLista 
        itemList={itemList}
        handleModal={handleModal}
      />

      <ModalCustom
        modalVisible={modalVisible}
        handleCancelModal={handleCancelModal}
        handleDelete={handleDelete}
        itemSelected={itemSelected}
      />
    </View>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  titulo: {
    backgroundColor: '#F3DFE3',
    fontSize: 30,
    fontFamily: 'sans-serif-thin',
    borderRadius: 5,
    marginBottom: 20,
    marginTop: 20,
  },
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
});