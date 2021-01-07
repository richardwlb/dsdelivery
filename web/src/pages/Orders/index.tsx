// import React from 'react';
import { useEffect, useState } from 'react';
import ProductsList from '../../components/ProductsList';
import api from '../../services/apit';
import StepsHeader from './StepsHeader';
import './styles.css';
import { Product } from './types';

export default function Orders(){

    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        api.get('/products')
            .then((response) => { setProducts(response.data);})
            .catch(error => console.log(error));
    }, []);

    return(
       <div className="orders-container">
           <StepsHeader />
           <ProductsList products={products} />
       </div>
    );
}

