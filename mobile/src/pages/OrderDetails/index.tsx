import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, Alert, Linking } from 'react-native';

import dayjs from 'dayjs';
import 'dayjs/locale/pt-br';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.locale('pt-br');
dayjs.extend(relativeTime);

import { Order } from '../../types';
import styles from './styles';

import api from '../../services/api';
import Header from '../../components/Header';
import OrderCard from '../../components/OrderCard';
import { RectButton } from 'react-native-gesture-handler';

type Props = {
    route: {
        params: {
            order: Order;
        }
    }
}

export default function OrderDetails({ route }: Props){

  const { order } = route.params;
  const navigation = useNavigation();

  const handleConfirmDelivery = async () => {
    await api.put(`/orders/${order.id}/delivered`)
      .then( response => {
        // console.log(response.data);
        Alert.alert(`Pedido ${order.id} foi confirmado com sucesso.`);
        navigation.navigate('Orders');
      })
      .catch( error => {
        Alert.alert(`Erro ao finalizar entrega. ${error}`)
      });  
  }

  const handleStartNavigation = () => {
    Linking.openURL(`https://www.google.com/maps/dir/?api=1&travelmode=driving&dir_action=navigate&destination=${order.latitude},${order.longitude}`);
  }

  return(
    <>
      <Header />
        <View style={styles.container} >
          <OrderCard order={order} />
          <RectButton 
            style={styles.button} 
            onPress={handleStartNavigation}
          >
            <Text style={styles.buttonText}>INICIAR NAVEGAÇÃO</Text>
          </RectButton>
          <RectButton 
            style={styles.button} 
            onPress={handleConfirmDelivery} 
          >
            <Text style={styles.buttonText}>CONFIRMAR ENTREGA</Text>
          </RectButton>
          <RectButton 
            style={styles.button} 
            onPress={ () => navigation.navigate('Orders')}
          >
            <Text style={styles.buttonText}>VOLTAR</Text>
          </RectButton>
        </View>
    </>
  );
}