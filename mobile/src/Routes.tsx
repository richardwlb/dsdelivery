import React from 'react';

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator(); // Pilha de navegação

import Home from './pages/Home';
import Orders from './pages/Orders';
import OrdersDetails from './pages/OrderDetails';

export default function Routes(){
    return(
        <NavigationContainer>
            
            <Stack.Navigator
                headerMode="none"
                screenOptions={{
                    cardStyle: {
                        backgroundColor: '#FFF'
                    }
                }}
            >
                <Stack.Screen name="Home" component={Home} ></Stack.Screen>
                <Stack.Screen name="Orders" component={Orders} ></Stack.Screen>
                <Stack.Screen name="OrderDetails" component={OrdersDetails} ></Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>
    );
}