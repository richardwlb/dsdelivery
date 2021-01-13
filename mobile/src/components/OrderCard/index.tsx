import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

export default function OrderCard(){

    return(
        <View style={styles.container} >
            <View style={styles.header} >
                <Text style={styles.orderName} >Pedido 1</Text>
                <Text style={styles.orderPrice} >R$ 50,00</Text>
            </View>
            <Text style={styles.text} >Há 30 min.</Text>
            <View style={styles.productsList} >
                <Text style={styles.text} >Pizza Calabresa</Text>
                <Text style={styles.text} >4 Queijos</Text>
                <Text style={styles.text} >Marguerita</Text>
            </View>
        </View>
    );
}