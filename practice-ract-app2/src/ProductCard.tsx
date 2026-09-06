import type {ProductType} from './types'
export default function ProductCard({productName,price}:ProductType){
    return (
        <>
            <div>
                <h4>Product Name: {productName}</h4>
                <p>Price: {price}</p>
            </div>
        </>
    )
}