import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles';

export default function Header(){
    return(
        <View style={styles.container} >
            <Image source={require('../../../assets/logo.png')} />
            <Text style={styles.text} >DS Delivery</Text>
        </View>
    );
}