export default function Cart({itemCount}:{itemCount:number}){
    return itemCount>0 && <button>Checkout</button>
}