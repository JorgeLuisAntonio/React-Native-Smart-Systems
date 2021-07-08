import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Comisiones from "../../screens/Cuenta/Comisiones/Comisiones";

const Stack = createStackNavigator();

export default function ComisionesStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="comisiones"
                component={Comisiones}
                options={{ headerLeft: false, title: "Comisiones" }}
            />
        </Stack.Navigator>

    );
}