//ESTE COMPONENTE NO SE UTILIZA PORQUE NO SE COMO MANDAR LA DATA A LA SCREEN PADRE
import React, { useState } from 'react';
import { View, Platform, Text } from 'react-native';
import { Icon } from "react-native-elements";
import DateTimePicker from '@react-native-community/datetimepicker';

export default function Date() {
    const [date, setDate] = useState(new Date());
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);

    const onChange = (event, selectedDate) => {
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

    const showTimepicker = () => {
        showMode('time');
    };

    return (
        <View>
            <View>
                <Icon
                    type="material-community"
                    name="calendar-range"
                    onPress={showDatepicker} />
            </View>
            {show && (
                <DateTimePicker
                    testID="dateTimePicker"
                    value={date}
                    mode={mode}
                    is24Hour={true}
                    display="default"
                    onChange={onChange}
                />
            )}
        </View>
    );
};