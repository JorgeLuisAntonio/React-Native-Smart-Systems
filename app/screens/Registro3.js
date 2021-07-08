import React, { useState, useRef, useEffect } from 'react'
import { StyleSheet, View, Switch, Text, Linking } from "react-native";
import { TextInput } from 'react-native-paper';
import { Button } from "react-native-elements";
import { isEmpty, size } from "lodash";
import { Picker } from '@react-native-picker/picker';
import Toast from "react-native-easy-toast";
export default function Registro3(props) {
    const { navigation } = props;
    const { nombre, apMaterno, apPaterno, colonia, cp, ciudad, estado, sexo } = props.route.params.datos1;
    const { correoSecundario, date, ocupacion } = props.route.params.datos2;
    const [selected, setSelected] = useState("Publicidad");
    const [isEnabled, setIsEnabled] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState(defaultFormValue());
    const toastRef = useRef();

    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    patron = /[3_4(5!6"7#2=8{9*}&,;'*+%[:)-1]/;
    useEffect(() => {
        setFormData({ ...formData, "conocimiento": selected });
    }, [selected]);

    const onChange = (e, type) => {
        setFormData({ ...formData, [type]: e.nativeEvent.text });
    };
    const onSubmit = () => {
        if (
            isEmpty(formData.usuario) ||
            isEmpty(formData.contraseña) ||
            isEmpty(formData.repetirContraseña) ||
            isEmpty(formData.conocimiento)
        ) {
            toastRef.current.show("Todos los campos son obligatorios");
        } else if (patron.test(formData.usuario)) {
            toastRef.current.show("No debe llevar numeros o caracteres especiales");

        } else if (!patron.test(formData.contraseña) || size(formData.contraseña) < 8 || !patron.test(formData.repetirContraseña)
            || size(formData.repetirContraseña) < 8) {
            toastRef.current.show("La contraseña debe tener caracteres, numeros y ser mayor a 8 caracteres ");
        } else if (formData.contraseña != formData.repetirContraseña) {
            toastRef.current.show("La contraseña deben ser iguales ");
        } else if (isEnabled == false) {
            toastRef.current.show("Permite las condiciones para avanzar");
        }
        else {
            console.log(formData.conocimiento)
            navigation.reset({
                index: 0,
                routes: [{ name: 'login' }],
            });
        }
    };
    return (
        <View marginHorizontal={40} marginTop={20}>
            <TextInput
                label="Usuario*"
                mode='outlined'
                outlineColor='#78A22F'
                theme={{ colors: { primary: '#008799', underlineColor: 'transparent', } }}
                onChange={(e) => onChange(e, "usuario")}
                right={<TextInput.Icon name="face" />}

            />
            <TextInput
                label="Contraseña*"
                mode='outlined'
                secureTextEntry={showPassword ? false : true}
                outlineColor='#78A22F'
                theme={{ colors: { primary: '#008799', underlineColor: 'transparent', } }}
                onChange={(e) => onChange(e, "contraseña")}
                right={<TextInput.Icon name={showPassword ? "lock-open-outline" : "lock"}
                    onPress={() => setShowPassword(!showPassword)} />}

            />
            <TextInput
                label="Repetir contraseña*"
                mode='outlined'
                secureTextEntry={showPassword ? false : true}
                theme={{ colors: { primary: '#008799', underlineColor: 'transparent', } }}
                outlineColor='#78A22F'
                onChange={(e) => onChange(e, "repetirContraseña")}
                right={<TextInput.Icon name={showPassword ? "lock-open-outline" : "lock"}
                    onPress={() => setShowPassword(!showPassword)} />}
            />
            <View marginTop={20}>
                <Text >¿Como supiste de la app?</Text>
                <Picker
                    selectedValue={selected}
                    onValueChange={(itemValue, itemIndex) =>
                        setSelected(itemValue)
                    }>
                    <Picker.Item label="Publicidad" value="Publicidad" />
                    <Picker.Item label="Pagina web" value="Redes Sociales" />
                    <Picker.Item label="Un amigo" value="Un amigo" />
                    <Picker.Item label="Redes sociales" value="Redes sociales" />
                </Picker>
            </View>
            <Toast ref={toastRef} position="center" opacity={0.9} />
            <View flexDirection={'row'} marginHorizontal={75} marginBottom={20} alignItems={'center'}>
                <Text
                    onPress={() => Linking.openURL('http://google.com')}
                >He leído y aceptado los terminos y condiciones</Text>
                <Switch
                    trackColor={{ false: "#767577", true: "#78A22F" }}
                    thumbColor={isEnabled ? "#f4f3f4" : "#f4f3f4"}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                />
            </View>
            <Button
                title="Unirse"
                buttonStyle={styles.btnRegistro}
                onPress={onSubmit}
            />

        </View>
    )
}
function defaultFormValue() {
    return {
        usuario: "",
        contraseña: "",
        repetirContraseña: "",
        conocimiento: ""
    };
}
const styles = StyleSheet.create({
    btnRegistro: {
        backgroundColor: "#78A22F",
    }
})