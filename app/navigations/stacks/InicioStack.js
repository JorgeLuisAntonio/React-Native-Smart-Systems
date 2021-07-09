import React from "react";
// se imprta el componente
import { Icon } from "react-native-elements";
import { NavigationContainer } from "@react-navigation/native";
//se importa la funcion createbotton tab
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// la funcion tab va crear un componente
import ProductosStack from "./ProductoStack";
import ComisionesStack from "./ComisionesStack";
import ReferenciadosStack from "./ReferenciadosStack"
//import InicioStack from "./stacks/InicioStack";

const Tab = createBottomTabNavigator();

export default function CuentaNavigation() {
    return (
        <Tab.Navigator
            initialRouteName="productos"
            tabBarOptions={{
                inactiveTintColor: "#646464",
                activeTintColor: "#78A22F",
            }}

            screenOptions={({ route }) => ({
                tabBarIcon: ({ color }) => screenOptions(route, color),
            })}

        >

            <Tab.Screen
                name="productos"
                component={ProductosStack}
                options={{
                    title: "Productos"
                }}
            />

            <Tab.Screen
                name="comisiones"
                component={ComisionesStack}
                options={{
                    title: "Comisiones"
                }}
            />
            <Tab.Screen
                name="referenciados"
                component={ReferenciadosStack}
            /*
       options={{
           title: "Smart Referencer", headerLeft: () => (
               <Icon type="material-community"
                   name="menu"
                   onPress={() => navigation.openDrawer()}
               />
           )
       }}
*/
            />


        </Tab.Navigator>

    );
}

function screenOptions(route, color) {
    let iconName;

    switch (route.name) {
        case "productos":
            iconName = "clipboard-list-outline";
            break;
        case "comisiones":
            iconName = "badge-account-outline";
            break;
        case "referenciados":
            iconName = "star-outline";
            break;
        case "inicio":
            iconName = "magnify";
            break;
        case "account":
            iconName = "home-outline";
            break;
        default:
            break;
    }
    return (
        <Icon type="material-community" name={iconName} size={22} color={color} />
    );
}
