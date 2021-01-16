import { useNavigation, useIsFocused } from '@react-navigation/native';
import React, {useEffect, useState, } from 'react';
import { Alert, ScrollView, Text, View } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

import Header from '../../components/Header';
import OrderCard from '../../components/OrderCard';

import api from '../../services/api';

import { Order } from '../../types';
import styles from './styles';

export default function Orders(){

    const [orders, setOrders] = useState<Order[]>([]);
    const [isLoading, setLoading] = useState(false);
    const navigation = useNavigation();
    const isFocused = useIsFocused();

    useEffect( () => {
        if(isFocused){
          loadOrders();
        }
    }, [isFocused]);

    const loadOrders = async () => {
        setLoading(true);
        await api.get('/orders')
            .then( response => setOrders(response.data))
            .catch(error => Alert.alert("Erro ao buscar pedido. " + error))
            .finally(() => setLoading(false));
    }

    const goToOrderDetails = (order: Order) => {
        navigation.navigate('OrderDetails', {
            order
        });
    }

    return(
        <>
          <Header />
          <ScrollView  >
            { isLoading ? (
              <View style={styles.container} >
                  <Text style={styles.text} >Carregando...</Text>
              </View>
            ) : ( 
              orders.map( order =>  {
                return(
                  <TouchableWithoutFeedback key={order.id} onPress={ ()=> goToOrderDetails(order)}>
                      <OrderCard key={order.id} order={order} />
                  </TouchableWithoutFeedback>
                )}
                ))}
          </ScrollView>
        </>
    );
}