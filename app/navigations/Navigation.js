import React from "react";
import { Icon } from "react-native-elements";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Bienvenida from "../screens/Bienvenida"
import Login from "../screens/Login"
import Registro from "../screens/Registro"
import CuentaNavigation from "./CuentaNavigation"
import RegistroSegundo from "../screens/Registro2"
import RegistroTercero from "../screens/Registro3"

const Stack = createStackNavigator();

export default function Navigation(props) {
    const { navigation } = props;
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="bienvenida"
                    component={Bienvenida}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="login"
                    component={Login}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="registro"
                    component={Registro}
                    options={{
                        title: "Registro de Usuario", headerStyle: {
                            backgroundColor: '#ffffff',

                        },
                        headerTintColor: '#008799',

                        headerTitleStyle: {
                            fontWeight: 'bold',
                            textAlign: "auto"
                        },
                    }}
                />
                <Stack.Screen
                    name="registrodos"
                    component={RegistroSegundo}
                    options={{

                        title: "Registro de Usuario", headerStyle: {
                            backgroundColor: '#ffffff',

                        },
                        headerTintColor: '#008799',

                        headerTitleStyle: {
                            fontWeight: 'bold',
                            textAlign: "auto"
                        },
                    }}
                />
                <Stack.Screen
                    name="registrotres"
                    component={RegistroTercero}
                    options={{
                        title: "Registro de Usuario", headerStyle: {
                            backgroundColor: '#ffffff',

                        },
                        headerTintColor: '#008799',

                        headerTitleStyle: {
                            fontWeight: 'bold',
                            textAlign: "auto"
                        },
                    }}
                />

                <Stack.Screen
                    name="cuenta"

                    component={CuentaNavigation}
                    options={{ headerShown: false }}
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




            </Stack.Navigator>

        </NavigationContainer>


    );
}

