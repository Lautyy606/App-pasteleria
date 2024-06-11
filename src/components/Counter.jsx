import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, incrementByAmount, reset } from "../features/Counter/counterSlice";

const Counter = () => {
    const count = useSelector(state => state.counter.value)
    const dispatch = useDispatch()
    const [inputToAdd, setInputToAdd] = useState(null);

    return (
        <View style={styles.container}>
            <View style={styles.buttonsContainer}>
                <Pressable 
                    style={styles.button}
                    onPress={()=> dispatch(decrement())}
                >
                    <Text style={styles.buttonText}>-</Text>
                </Pressable>
                <Text style={styles.span}>{count}</Text>
                <Pressable 
                    style={styles.button}
                    onPress={()=> dispatch(increment())}
                >
                    <Text style={styles.buttonText}>+</Text>
                </Pressable>
            </View>
            <View style={styles.buttonsContainer}>
                <TextInput
                    placeholder="Cantidad a aumentar"
                    style={styles.spanInput}
                    onChangeText={setInputToAdd}
                    value={inputToAdd}
                />
                <Pressable 
                    style={styles.button}
                    onPress={()=> dispatch(incrementByAmount(Number(inputToAdd)))}
                >
                    <Text style={styles.buttonText}>Add</Text>
                </Pressable>
            </View>
            <Pressable style={styles.button} onPress={()=>dispatch(reset())}>
                <Text style={styles.buttonText}>Reset</Text>
            </Pressable>
        </View>
    );
};

export default Counter;

const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        backgroundColor: '#F9F9F9',
        padding: 10,
    },
    buttonsContainer: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 10,
    },
    button: {
        padding: 10,
        backgroundColor: '#CDF0EA',
    },
    span: {
        backgroundColor: '#FAF4B7',
        width: "60%",
        padding: 10,
        textAlign: "center",
        fontSize: 18,
    },
    spanInput: {
        backgroundColor: '#FAF4B7',
        width: "60%",
        padding: 10,
        textAlign: "center",
        fontSize: 14,
    },
    buttonText: {
        fontSize: 16,
        fontFamily: "Montserrat",
    },
});