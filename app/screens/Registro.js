import React, { useState, useRef, useEffect } from 'react';
import { StyleSheet, View, ScrollView, Text } from "react-native";
import { Icon, Button } from "react-native-elements";
import { TextInput, Checkbox, HelperText } from 'react-native-paper';
import Toast from "react-native-easy-toast";
import { size, isEmpty } from "lodash";
export default function Registro(props) {
    const { navigation } = props;
    const [masculino, setMasculino] = useState();
    const [femenino, setFemenino] = useState(false);
    const [formData, setFormData] = useState(defaultFormValue());
    const toastRef = useRef();
    // validar correo ,telefono y numeros , numero exterior
    patron = /[3_4(5!6"7#2=8{9*}&,;'*+%[:)-1]/;
    useEffect(() => {
        let sexo = "";
        if (masculino === true) {
            sexo = "masculino"
        } else if (femenino === true) {
            sexo = "femenino";
        }
        setFormData({ ...formData, "sexo": sexo });
    }, [masculino, femenino]);

    const onSubmit = () => {

        if (
            isEmpty(formData.nombre) ||
            isEmpty(formData.apPaterno) ||
            isEmpty(formData.apMaterno) ||
            isEmpty(formData.calle) ||
            isEmpty(formData.numeroInt) ||
            isEmpty(formData.colonia) ||
            isEmpty(formData.cp) ||
            isEmpty(formData.ciudad) ||
            isEmpty(formData.estado) ||
            formData.sexo == "" ||
            formData.sexo == undefined
        ) {
            toastRef.current.show("Todos los campos son obligatorios");
        } else if (patron.test(formData.nombre)) {
            toastRef.current.show("Nombre no debe llevar numero o caracteres especiales", 2000);
        } else if (patron.test(formData.apPaterno)) {
            toastRef.current.show("Apellido Paterno no debe llevar numero o caracteres especiales", 2000);
        } else if (patron.test(formData.apMaterno)) {
            toastRef.current.show("Apellido Materno no debe llevar numero o caracteres especiales", 2000);
        } else if (patron.test(formData.ciudad)) {
            toastRef.current.show("Ciudad no debe llevar numero o caracteres especiales", 2000);
        }
        else if (patron.test(formData.estado)) {
            toastRef.current.show("Estado no debe llevar numero o caracteres especiales", 2000);
        }
        else {
            navigation.navigate("registrodos", {
                datos: formData
            })

        }
    };

    const onChange = (e, type) => {
        setFormData({ ...formData, [type]: e.nativeEvent.text });
    };
    return (

        <ScrollView>
            <View style={styles.baseContainer}>
                <TextInput
                    label="Nombre(s)*"
                    mode='outlined'
                    theme={{ colors: { primary: '#008799', underlineColor: 'transparent', } }}
                    outlineColor='#78A22F'
                    onChange={(e) => onChange(e, "nombre")}
                    right={<TextInput.Icon name="face" />}


                />
                <TextInput
                    label="Apellido Paterno*"
                    mode='outlined'
                    theme={{ colors: { primary: '#008799', underlineColor: 'transparent', } }}
                    outlineColor='#78A22F'
                    onChange={(e) => onChange(e, "apPaterno")}
                />
                <TextInput
                    label="Apellido Materno*"
                    mode='outlined'
                    theme={{ colors: { primary: '#008799', underlineColor: 'transparent', } }}
                    outlineColor='#78A22F'
                    onChange={(e) => onChange(e, "apMaterno")}


                />

                <TextInput
                    label="Calle*"
                    mode='outlined'
                    theme={{ colors: { primary: '#008799', underlineColor: 'transparent', } }}
                    outlineColor='#78A22F'
                    right={<TextInput.Icon name="home" />}
                    onChange={(e) => onChange(e, "calle")}


                />

                <TextInput
                    label="Num int.*"
                    mode='outlined'
                    theme={{ colors: { primary: '#008799', underlineColor: 'transparent', } }}
                    outlineColor='#78A22F'
                    dense={true}
                    keyboardType='numeric'
                    onChange={(e) => onChange(e, "numeroInt")}



                />

                <TextInput
                    label="Colonia*"
                    mode='outlined'
                    theme={{ colors: { primary: '#008799', underlineColor: 'transparent', } }}
                    outlineColor='#78A22F'
                    onChange={(e) => onChange(e, "colonia")}

                />
                <TextInput
                    label="CP*"
                    mode='outlined'
                    theme={{ colors: { primary: '#008799', underlineColor: 'transparent', } }}
                    outlineColor='#78A22F'
                    keyboardType='numeric'
                    dense={true}
                    onChange={(e) => onChange(e, "cp")}

                />
                <TextInput
                    label="Ciudad*"
                    mode='outlined'
                    theme={{ colors: { primary: '#008799', underlineColor: 'transparent', } }}
                    outlineColor='#78A22F'
                    onChange={(e) => onChange(e, "ciudad")}

                />
                <TextInput
                    label="Estado*"
                    mode='outlined'
                    theme={{ colors: { primary: '#008799', underlineColor: 'transparent', } }}
                    outlineColor='#78A22F'
                    onChange={(e) => onChange(e, "estado")}


                />

                <Text>Sexo: </Text>
                <View flexDirection={"row"} alignItems={"center"} marginLeft={30}  >

                    <Checkbox
                        color='#78A22F'
                        status={masculino ? 'checked' : 'unchecked'}
                        onPress={() => {

                            !femenino ? setMasculino(!masculino) : toastRef.current.show("Solo selecciona un genero");
                        }}
                    />
                    <Text marginHorizontal={50}>Masculino</Text>
                    <Checkbox

                        title='Click Here'
                        color='#78A22F'
                        status={femenino ? 'checked' : 'unchecked'}
                        onPress={() => {

                            !masculino ? setFemenino(!femenino) : toastRef.current.show("Solo selecciona un genero");

                        }}

                    />
                    <Text  >Femenino</Text>
                </View>
                <Toast ref={toastRef} position="center" opacity={0.9} />
                <Button

                    buttonStyle={styles.btnRegistro}
                    title="Siguiente"
                    onPress={onSubmit}
                />
            </View>
        </ScrollView >



    );
}
function defaultFormValue() {
    return {
        nombre: "",
        apPaterno: "",
        apMaterno: "",
        calle: "",
        numeroInt: "",
        colonia: "",
        cp: "",
        ciudad: "",
        estado: "",
        sexo: "",


    };
}

const styles = StyleSheet.create({
    btnRegistro: {
        backgroundColor: "#78A22F",
    },
    baseContainer: {
        marginHorizontal: 40,
        marginTop: 20,
        marginBottom: 15
    }

});


