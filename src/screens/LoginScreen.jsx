import { Pressable, StyleSheet, Text, View } from "react-native"
import React, { useState, useEffect } from "react"
import InputForm from "../components/inputForm"
import SubmitButton from "../components/submitButton"
import { useSignInMutation } from "../services/authService"
import { setUser } from "../features/User/userSlice"
import { useDispatch } from "react-redux"

const LoginScreen = ({ navigation }) => {
    const dispatch = useDispatch()
    const [triggerSignIn, result] = useSignInMutation()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    useEffect(() => {
        if (result.isSuccess) {
            dispatch(
                setUser({
                    email: result.data.email,
                    idToken: result.data.idToken,
                })
            )
        }
    }, [result])

    const onSubmit = () => {
        triggerSignIn({ email, password })
    }
    return (
        <View style={styles.main}>
            <View style={styles.container}>
                <Text style={styles.title}>Ingresar</Text>
                <InputForm label={"email"} onChange={setEmail} error={""} />
                <InputForm
                    label={"password"}
                    onChange={setPassword}
                    error={""}
                    isSecure={true}
                />
                <SubmitButton onPress={onSubmit} title="Enviar" />
                <Text style={styles.sub}>No tienes una cuenta?</Text>
                <Pressable onPress={() => navigation.navigate("Signup")}>
                    <Text style={styles.subLink}>Registrate</Text>
                </Pressable>
            </View>
        </View>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    main: {
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
    },
    container: {
        width: "90%",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: '#F9F9F9',
        gap: 15,
        paddingVertical: 20,
        borderRadius: 10,
    },
    title: {
        fontSize: 22,
        fontFamily: "Josefin",
    },
    sub: {
        fontSize: 14,
        color: "black",
    },
    subLink: {
        fontSize: 14,
        color: "blue",
    },
})