import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Referenciados from "../../screens/Cuenta/Referenciados/Referenciados";

const Stack = createStackNavigator();

export default function ReferenciadosStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="refrenciados"
                component={Referenciados}
                options={{ headerLeft: false, title: "Referenciados" }}
            />
        </Stack.Navigator>

    );
}