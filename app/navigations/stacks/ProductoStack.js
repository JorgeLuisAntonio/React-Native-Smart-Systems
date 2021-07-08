import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Productos from "../../screens/Productos/Productos";

const Stack = createStackNavigator();

export default function InventarioStack() {
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