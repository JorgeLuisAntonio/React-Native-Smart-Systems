import React, { useState, useRef, useEffect } from 'react';
import { View, ScrollView, Platform, Text, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';
import { Icon, Button } from "react-native-elements";
import { Picker } from '@react-native-picker/picker';
import { size, isEmpty } from "lodash";
import { validateEmail } from "../utils/validations";
import DateTimePicker from '@react-native-community/datetimepicker';
import Toast from "react-native-easy-toast";

export default function Registro2(props) {
    const { navigation } = props;
    //  const { nombre, apMaterno, apPaterno } = props.route.params.datos;
    const [selectedOcupacion, setSelectedOcupacion] = useState("Agente de ventas");
    const [formData, setFormData] = useState(defaultFormValue());
    const [date, setDate] = useState(new Date());
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);
    const toastRef = useRef();

    useEffect(() => {
        setFormData({ ...formData, "date": date.toString() });
    }, [date]);

    useEffect(() => {
        setFormData({ ...formData, "ocupacion": selectedOcupacion });
    }, [selectedOcupacion]);

    const onSubmit = () => {
        if (
            isEmpty(formData.celular) ||
            isEmpty(formData.telefonoTrabajo) ||
            isEmpty(formData.telefonoOficina) ||
            isEmpty(formData.correoPrincipal) ||
            isEmpty(formData.correoSecundario)
        ) {
            toastRef.current.show("Todos los campos son obligatorios");
        } else if (!validateEmail(formData.correoPrincipal) || !validateEmail(formData.correoSecundario)) {
            toastRef.current.show("El email no es correcto");
        } else if (size(formData.celular) < 10 || size(formData.telefonoTrabajo) < 10 || size(formData.telefonoOficina) < 10) {
            toastRef.current.show("El telefono debe tener mas de 10 digitos");
        }
        else {
            navigation.navigate("registrotres", {
                datos2: formData, datos1: props.route.params.datos
            })

        }
    };

    const onChange = (e, type) => {
        setFormData({ ...formData, [type]: e.nativeEvent.text });
    };

    const onChangeDate = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);

    };

    const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
    };

    const showDatepicker = () => {
        showMode('date');
    };

    return (

        <View
            style={{

                justifyContent: "center",
                marginHorizontal: 40

            }}>
            <ScrollView marginTop={20} >
                <View flexDirection={"row"} >
                    <Text >Seleccionar fecha de nacimiento: </Text>
                    <Icon
                        type="material-community"
                        name="calendar-range"
                        color={date ? "#78A22F" : "black"}
                        onPress={showDatepicker} />

                    {show && (
                        <DateTimePicker
                            testID="dateTimePicker"
                            value={date}
                            mode={mode}
                            is24Hour={true}
                            display="default"
                            onChange={onChangeDate}
                        />
                    )}
                </View>

                <TextInput
                    label="Celular*"
                    mode='outlined'
                    theme={{ colors: { primary: '#008799', underlineColor: 'transparent', } }}
                    keyboardType='numeric'
                    outlineColor='#78A22F'
                    onChange={(e) => onChange(e, "celular")}
                    right={<TextInput.Icon name="phone" />}

                />
                <TextInput
                    label="Telefono trabajo*"
                    mode='outlined'
                    theme={{ colors: { primary: '#008799', underlineColor: 'transparent', } }}
                    keyboardType='numeric'
                    outlineColor='#78A22F'
                    onChange={(e) => onChange(e, "telefonoTrabajo")}
                    right={<TextInput.Icon name="phone" />}

                />
                <TextInput
                    label="Telefono oficina*"
                    mode='outlined'
                    theme={{ colors: { primary: '#008799', underlineColor: 'transparent', } }}
                    keyboardType='numeric'
                    outlineColor='#78A22F'
                    onChange={(e) => onChange(e, "telefonoOficina")}
                    right={<TextInput.Icon name="phone" />}

                />

                <TextInput
                    label="Correo principal*"
                    mode='outlined'
                    theme={{ colors: { primary: '#008799', underlineColor: 'transparent', } }}
                    outlineColor='#78A22F'
                    onChange={(e) => onChange(e, "correoPrincipal")}
                    right={<TextInput.Icon name="at" />}

                />
                <TextInput
                    label="Correo secundario*"
                    mode='outlined'
                    theme={{ colors: { primary: '#008799', underlineColor: 'transparent', } }}
                    outlineColor='#78A22F'
                    onChange={(e) => onChange(e, "correoSecundario")}
                    right={<TextInput.Icon name="at" />}

                />
                <View marginTop={10} marginBottom={10}>
                    <Text>Ocupacion Actual: </Text>
                    <Picker

                        selectedValue={selectedOcupacion}
                        onValueChange={(itemValue, itemIndex) =>
                            setSelectedOcupacion(itemValue)
                        }>
                        <Picker.Item label="Agente de ventas" value="Agente de ventas" />
                        <Picker.Item label="Sistemas" value="Sistemas" />
                    </Picker>

                </View>
                <Button
                    // containerStyle={styles.btnContainerRegister}
                    buttonStyle={styles.btnRegistro}
                    title="Siguiente"
                    onPress={onSubmit}
                />
            </ScrollView>

            <Toast ref={toastRef} position="center" opacity={0.9} />
        </View>

    )
}
function defaultFormValue() {
    return {
        celular: "",
        telefonoTrabajo: "",
        telefonoOficina: "",
        correoPrincipal: "",
        correoSecundario: "",
        date: "",
        ocupacion: ""
    };
}
const styles = StyleSheet.create({
    btnRegistro: {
        backgroundColor: "#78A22F",
    }
})
