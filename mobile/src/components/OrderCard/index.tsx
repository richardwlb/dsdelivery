import React from 'react';
import { View, Text } from 'react-native';
import { Order } from '../../types';
import { formatPrice } from '../../helpers';

import dayjs from 'dayjs';
import 'dayjs/locale/pt-br';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.locale('pt-br');
dayjs.extend(relativeTime);

import styles from './styles';

type Props = {
    order: Order;
}

export default function OrderCard( { order }: Props){

    return(
        <View style={styles.container} >
            <View style={styles.header} >
                <Text style={styles.orderName} >Pedido {order.id}</Text>
                <Text style={styles.orderPrice} >{formatPrice(order.total)}</Text>
            </View>
            <Text style={styles.text} >{ dayjs(order.moment).fromNow() }</Text>
            <View style={styles.productsList} >
                {
                    order.products.map( product => {
                        return(
                            <Text key={product.id} style={styles.text} >{ product.name }</Text>
                        )
                    })
                }
            </View>
        </View>
    );
}