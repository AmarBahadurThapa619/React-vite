import ProductCard from "./ProductCard";
import '../styles/Body.css';
import {products} from "../constants/constant.js";

function Body(){
    console.log(products);
    return(
        <main className="product-cards">
            <ProductCard data={products[0]}/>
            <ProductCard data={products[1]}/>
            <ProductCard data={products[2]}/>
        </main>
    );
}
export default Body;