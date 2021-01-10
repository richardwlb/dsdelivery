// import React from 'react';
import { useEffect, useState } from 'react';
import OrderLocation from '../../components/OrderLocation';
import ProductsList from '../../components/ProductsList';
import api from '../../services/apit';
import StepsHeader from './StepsHeader';
import './styles.css';
import { OrderLocationData, Product } from './types';

export default function Orders(){
    const [products, setProducts] = useState<Product[]>([]);
    const [orderLocation, setOrderLocation] = useState<OrderLocationData>();

    useEffect(() => {
        api.get('/products')
            .then((response) => { setProducts(response.data);})
            .catch(error => console.log(error));
    }, []);

    return(
       <div className="orders-container">
           <StepsHeader />
           <ProductsList products={products} />
           <OrderLocation onChangeLocation={location => setOrderLocation(location)} />
       </div>
    );
}

