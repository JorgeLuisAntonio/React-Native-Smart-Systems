import React from "react";
import { createDrawerNavigator } from '@react-navigation/drawer';

import ProductosStack from "../../navigations/stacks/ProductoStack";
import Inicio from "../../screens/Cuenta/Menu/Inicio";
import MiCuenta from "../../screens/Cuenta/Menu/MiCuenta"
import Ayuda from "../../screens/Cuenta/Menu/Ayuda"
const Drawer = createDrawerNavigator();


export default function InicioStack(props) {
    const { navigation } = props;
    return (
        <Drawer.Navigator>
            <Drawer.Screen
                name="inicio"
                component={Inicio}
                options={{ title: "Inicio" }}
            />
            <Drawer.Screen
                name="productosDrawer"
                component={ProductosStack}
                options={{ headerLeft: false, title: "Listado Productos" }}
            // onPress={}
            />
            <Drawer.Screen
                name="micuenta"
                component={MiCuenta}
                options={{ headerLeft: false, title: "Mi Cuenta" }}
            // onPress={}
            />
            <Drawer.Screen
                name="ayuda"
                component={Ayuda}
                options={{ headerLeft: false, title: "Ayuda" }}
            // onPress={}
            />
        </Drawer.Navigator>

    );
}