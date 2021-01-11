// import React from 'react';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import Footer from '../../components/Footer';
import OrderLocation from '../../components/OrderLocation';
import ProductsList from '../../components/ProductsList';
import api from '../../services/apit';
import { checkIsSelected, formatPrice } from './helper';
import OrderSummary from './OrderSummary';
import StepsHeader from './StepsHeader';
import './styles.css';
import { OrderLocationData, OrderPayload, Product } from './types';

export default function Orders(){
    const [products, setProducts] = useState<Product[]>([]);
    const [selectedProducts, setSelectedProducts] = useState<Product[]>([]);
    const [orderLocation, setOrderLocation] = useState<OrderLocationData>();
    const totalPrice = selectedProducts.reduce((sum, item)=> {
        return sum + item.price;
    }, 0);

    useEffect(() => {
        api.get('/products')
            .then((response) => { setProducts(response.data);})
            .catch(error => console.log(error));
    }, []);

    const handleSelectProduct = (product: Product) => {
        const isAlreadySelected = checkIsSelected(selectedProducts, product);
        
        if (isAlreadySelected) {
            const selected = selectedProducts.filter(item => item.id !== product.id);
            setSelectedProducts(selected);
        } else {
            setSelectedProducts(previous => [...previous, product]);
        }
    }

    function saveOrder(payload: OrderPayload){
        return api.post('/orders', payload);
    }

    const handleSubmit = () => {

        const productsIds = selectedProducts.map(({ id }) => ({ id }));
        const payload = {
        ...orderLocation!,
        products: productsIds
        }

        saveOrder(payload).then((response) => {
        toast.error(`Pedido enviado com sucesso! N. ${response.data.id} `);
        setSelectedProducts([]);
        })
        .catch(() => {
            toast.warning('Erro ao enviar pedido');
        })
      }

    return(
       <>
        <div className="orders-container">
            <StepsHeader />
            <ProductsList 
                products={products} 
                onSelectProduct={handleSelectProduct}
                selectedProducts={selectedProducts}
            />
            <OrderLocation 
                onChangeLocation={location => setOrderLocation(location)} 
            />
            <OrderSummary 
                amount={selectedProducts.length}
                totalPrice={formatPrice(totalPrice)}
                onSubmit={handleSubmit}
            />
        </div>
        <Footer />
       </>
    );
}

