import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Text, View } from "react-native";
import Productos from "../../screens/Cuenta/Productos/Productos";

const Stack = createStackNavigator();

export default function ProductoStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="productos"
                component={Productos}
                options={{ headerLeft: false, title: "Productos" }}
            />
        </Stack.Navigator>

    );
}