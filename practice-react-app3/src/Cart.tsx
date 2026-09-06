export default function Cart(){
    const buttonStyle = {
    width:'80px',
    height:'30px',
    margin: '10px auto'
  }
    //react e evabe ui change hoy na. jehetu eta ekta state orthat value change hole ui te show krbe, sehetu amader state er concept use korte hobe.
    let count = 0;
    function counter(){
        count++;
        alert(`counter value increased ${count}`)
    } 
    return(
        <>
            <h3>Shopping Cart</h3>
            <p>Items in the cart: {count}</p>
            <button style = {buttonStyle} onClick = {counter}>Add</button>
        </>
    )
}