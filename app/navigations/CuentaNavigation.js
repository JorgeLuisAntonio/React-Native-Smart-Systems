import React from "react";
import { createDrawerNavigator } from '@react-navigation/drawer';

//import ProductosStack from "../../navigations/stacks/ProductoStack";
import Inicio from "./stacks/InicioStack";
import MiCuenta from "../screens/Cuenta/Menu/MiCuenta"
import Ayuda from "../screens/Cuenta/Menu/Ayuda"
const Drawer = createDrawerNavigator();


export default function CuentaNavigation() {
    // const { navigation } = props;
    return (
        <Drawer.Navigator>
            <Drawer.Screen
                name="inicio"
                component={Inicio}

                options={{ headerShown: true, title: "Inicio" }}
            />

            <Drawer.Screen
                name="micuenta"
                component={MiCuenta}
                options={{ title: "Mi Cuenta" }}
                options={{ headerShown: true, title: "Mi cuenta" }}
            // onPress={}
            />
            <Drawer.Screen
                name="ayuda"
                component={Ayuda}
                options={{ headerShown: true, title: "Ayuda" }}
            // onPress={}
            />
        </Drawer.Navigator>

    );
}