import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { Icon } from "react-native-elements";
export default function Inicio(props) {
    const { navigation } = props;
    return (
        <View marginTop={30} >

            <Icon
                // reverse
                type="material-community"
                name="menu"
                onPress={() => navigation.openDrawer()}
                containerStyle={styles.btnContainer}

            />

        </View>
    );
}
const styles = StyleSheet.create({
    btnContainer: {
        position: "absolute",
        left: 10,
        shadowColor: "#0060C1",
        shadowOffset: { width: 3, height: 3 },
        shadowOpacity: 2,
    }
})