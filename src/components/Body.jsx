import { useEffect, useState } from "react";
// import { products } from "../constants/constant.js";
import '../styles/Body.css';
import ProductCard from "./ProductCard";
import ProductCardSkeleton from './ProductCardSkeleton.jsx';

function Body(){
    // const [productList, setProductList] = useState(products);
    const [productsList, setProductsList] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    async function fetchData(){
        const data = await fetch("https://fakestoreapi.com/products");
        const jsonData = await data.json();
        console.log(jsonData, "jsonData");
        setProductsList(jsonData);
    }

    function handleTopRatedProducts(){
        const topRatedProducts = productsList.filter((product) => product.rating.rate >= 4);
        console.log(topRatedProducts);
        setProductsList(topRatedProducts);
    }

    return(
        <main className="product-cards">
            <input type="text" />
            <div>
                <button onClick={handleTopRatedProducts}>Top Rated Products</button>
            </div>

            {productsList.length === 0
            ? Array.from({ length: 4 }).map((_, index) => <ProductCardSkeleton key={index} />)
            : productsList.map((product) => <ProductCard data={product} key={product.id} />)}
        </main>
    );
}
export default Body;