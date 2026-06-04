import ProductCard from "./ProductCard";
import '../styles/Body.css';
import {products} from "../constants/constant.js";

function Body(){
    console.log(products);
    return(
        <main className="product-cards">
            {
                products.map((product) =>
                    <ProductCard data = {product} key={product.id} />
            )}
        </main>
    );
}
export default Body;