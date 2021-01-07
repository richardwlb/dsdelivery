import { Product } from "../../pages/Orders/types";
import ProductCard from "../ProductCard";

type Props = {
    products: Product[]
}

export default function ProductsList({ products }: Props){
    return(
        <div className="orders-list-container">
            <div className="orders-list-items">
            {products.map((product) => (
                    <ProductCard product={product} key={product.id} />
            ))}
            </div>
        </div>
    );
}