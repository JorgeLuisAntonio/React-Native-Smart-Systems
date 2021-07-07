import React, { useState, useRef } from 'react';
import { Text, View, TouchableOpacity, StyleSheet, TextInput, ImageBackground, ScrollView, Image } from "react-native";
import { Input, Icon, Button } from "react-native-elements";
import Toast from "react-native-easy-toast";
import { size, isEmpty } from "lodash";
import { validateEmail } from "../utils/validations";
export default function Login(props) {
    //xddddddd
    const toastRef = useRef();
    const { navigation } = props;
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState(defaultFormValue());

    patron = /[_(!"#={*}&,;'*+%[:)-]/;

    const onChange = (e, type) => {
        setFormData({ ...formData, [type]: e.nativeEvent.text });
    };

    const onSubmit = () => {
        if (isEmpty(formData.email) || isEmpty(formData.password)) {
            toastRef.current.show("Todos los campos son obligatorios");
        } else if (!validateEmail(formData.email)) {
            toastRef.current.show("El email no es correcto");
        } else if (patron.test(formData.password)) {
            toastRef.current.show("No debe llevar caracteres especiales");
        } else {
            console.log("hola");
        }
    };

    return (

        <ImageBackground source={require('../../assets/imagenes/login.jpg')} style={styles.image}>
            <ScrollView>
                <Image
                    source={require("../../assets/imagenes/logo.png")}
                    resizeMode="contain"
                    style={styles.logo}
                />
                <View style={styles.baseContainer}>

                    <Input
                        placeholder="Correo electronico"
                        containerStyle={styles.inputForm}
                        onChange={(e) => onChange(e, "email")}
                        rightIcon={
                            <Icon
                                type="material-community"
                                name="account-box"
                                iconStyle={styles.iconRight}
                            />
                        }
                    />
                    <Input
                        placeholder="Contraseña"
                        containerStyle={styles.inputForm}

                        password={true}
                        secureTextEntry={showPassword ? false : true}
                        onChange={(e) => onChange(e, "password")}
                        rightIcon={
                            <Icon
                                type="material-community"
                                name={showPassword ? "lock-open-outline" : "lock"}
                                iconStyle={styles.iconRight}
                                onPress={() => setShowPassword(!showPassword)}
                            />
                        }
                    />
                    <Button
                        title="Iniciar sesión"
                        containerStyle={styles.btnContainerLogin}
                        buttonStyle={styles.btnLogin}
                        onPress={onSubmit}
                    />
                    <TouchableOpacity onPress={() => navigation.navigate('registro')}>

                        <Text style={styles.textRegister}>
                            ¿Aún no tienes una cuenta?{" "}
                            <Text
                                style={styles.btnRegister}
                                onPress={() => navigation.navigate("registro")}
                            >
                                Regístrate
                            </Text>
                        </Text>

                    </TouchableOpacity>

                </View>
                <Toast ref={toastRef} position="center" opacity={0.9} />
            </ScrollView>
        </ImageBackground>


    );
}
function defaultFormValue() {
    return {
        email: "",
        password: "",
    };
}

const styles = StyleSheet.create({
    logo: {
        width: "100%",
        height: 110,
        marginTop: 90,

    },
    image: {
        // marginTop: 25,
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
    },
    view: {
        flex: 1,
        backgroundColor: "#FFFFFF",
    },


    formContainer: {
        flex: 1,
        backgroundColor: "#0060C1",
    },
    baseContainer: {
        flex: 1,
        borderTopLeftRadius: 45,
        borderTopRightRadius: 45,
        alignItems: "center",
        marginTop: 50,


    },
    inputStyle: {
        color: "#0060C1"
    },
    inputForm: {

        flexDirection: "row",
        alignItems: "center",
        width: "90%",
        marginTop: 20,
        borderRadius: 10,
        backgroundColor: "#fff",
        opacity: 0.8



    },
    btnContainerLogin: {
        marginTop: 30,
        width: "80%",


    },
    btnLogin: {
        backgroundColor: "#78A22F",
        borderRadius: 20,
        marginHorizontal: 40,
    },
    iconRight: {
        color: "#78A22F",
    },

    textRegister: {
        textAlign: "center",
        marginTop: 10
    },
    btnRegister: {

        color: "#008799",
        fontWeight: "bold",

    }
});