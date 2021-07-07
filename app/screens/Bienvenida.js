import React from 'react';
import { Text, View, StyleSheet, ImageBackground, Image } from "react-native";
import { Button } from "react-native-elements";

export default function Bienvenida(props) {
    const { navigation } = props;
    return (
        <ImageBackground source={require('../../assets/imagenes/bienvenida.jpg')} style={styles.image}>
            <View marginHorizontal={10}>
                <Image
                    source={require("../../assets/imagenes/logo-inicio.png")}
                    resizeMode="stretch"
                    style={styles.logo}
                />
            </View>
            <View style={styles.formView}>
                <Button
                    title="Iniciar sesión"
                    containerStyle={styles.btnContainerLogin}
                    buttonStyle={styles.btnLogin}
                    onPress={() => navigation.navigate("login")}
                />
                <Button
                    title="Registrate"
                    containerStyle={styles.btnContainerLogin}
                    buttonStyle={styles.btnRegistro}
                    onPress={() => navigation.navigate("registro")}
                />
            </View>
        </ImageBackground>


    );
}
const styles = StyleSheet.create({
    logo: {
        width: "100%",
        height: 90,
        marginTop: 20,

    },
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
    },
    formView: {
        marginTop: 200,
    },
    btnLogin: {
        backgroundColor: '#008799',
    },
    btnRegistro: {
        backgroundColor: "#78A22F",
    },
    btnContainerLogin: {
        marginTop: 30,
        marginHorizontal: 20,


    }
});