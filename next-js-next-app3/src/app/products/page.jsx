import React, { cache } from "react";
import ProductCard from "../components/ProductCard";
const getProducts = async()=>{
    try{
        // const res = await fetch('http://localhost:5000/products',{cache:'force-cache'});
        const res = await fetch('http://localhost:5000/products',{cache:'no-store'});
        if(!res.ok){
            throw new Error('Products data fetch failed');
        }
        return res.json();
    }catch(error){
        throw new Error('Fetch error');
    }finally{
        console.log('must show');
    }
}
export default async function ProductsPage(){
    const products = await getProducts();
    return(
        <div className="grid grid-cols-3 gap-4 my-10" >
            {
                products.map(product=> <ProductCard key={product.id} product={product} ></ProductCard> )
            }
        </div>
    )
}