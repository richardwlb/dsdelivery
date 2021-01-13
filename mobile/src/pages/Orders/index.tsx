import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import Header from '../../components/Header';
import OrderCard from '../../components/OrderCard';
import styles from './styles';

export default function Orders(){

    return(
        <>
            <Header />
            <ScrollView  >
                <OrderCard />
                <OrderCard />
                <OrderCard />
                <OrderCard />
            </ScrollView>
        </>
    );
}