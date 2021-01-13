import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, Image } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import styles from './styles';

export default function Header(){
    const navigation = useNavigation();

    const handleOnPress = () => {
        navigation.navigate('Home');
    }

    return(
        <TouchableWithoutFeedback onPress={handleOnPress} >
            <View style={styles.container} >
                <Image source={require('../../../assets/logo.png')} />
                <Text style={styles.text} >DS Delivery</Text>
            </View>
        </TouchableWithoutFeedback>
    );
}