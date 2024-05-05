import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <TextInput style={styles.input}/>
        <Text style={styles.titulo}>Creando App de pasteleria</Text>
        <StatusBar style="auto" />
      </View>
        <Button title="Añadir" color="#E9B2BC"/>

      <View style={styles.taskContainer}>
        <View style={styles.card}>
          <Text style={styles.text}>Producto 1</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.text}>Producto 2</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.text}>Producto 3</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.text}>Producto 4</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E1F2FB',
    alignItems: 'center',
    // justifyContent: 'center',
    paddingTop: 30
  },
  input: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 0,
    marginBottom: 15,
    marginTop: 15
  },
  titulo: {
    backgroundColor: '#F3DFE3',
    fontSize: 30,
    fontFamily: 'sans-serif-thin',
    borderRadius: 5,
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#F3DFE3',
    marginTop: 15,
    marginVertical: 10,
    paddingTop: 8,
    paddingBottom: 8,
    paddingHorizontal: 100,
    borderRadius: 10,
  },
  text: {
    fontSize: 17,
    fontFamily: 'sans-serif-medium',
    fontWeight: 'normal', 
  },
});
