import { checkIsSelected } from "../../pages/Orders/helper";
import { Product } from "../../pages/Orders/types";
import ProductCard from "../ProductCard";

type Props = {
    products: Product[];
    selectedProducts: Product[];
    onSelectProduct: (product: Product) => void;
}

export default function ProductsList({ products, selectedProducts, onSelectProduct }: Props){
    return(
        <div className="orders-list-container">
            <div className="orders-list-items">
            {products.map((product) => (
                    <ProductCard 
                        product={product} 
                        key={product.id} 
                        onSelectProduct={onSelectProduct}
                        isSelected={checkIsSelected(selectedProducts, product)}
                    />
            ))}
            </div>
        </div>
    );
}