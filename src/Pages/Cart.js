import React, {useState, useContext} from 'react'
import {Context} from "../Utilities/someContext"
import CartItem from "../Components/CartItem"
const Cart = () => {
    const {cartItems, removeFromCart} = useContext(Context)
    console.log(cartItems)
    const cartItemElements = cartItems.map(item => (
        <CartItem key={item.id} item={item}/>
    ))

    const [buttonText, setButonText] = useState("Place order")
    const [ordered, setOrdered] = useState("")
    const placeOrder = () => {
        setButonText("Ordering...")
        setTimeout(() => {
            cartItems.map(item => (
                removeFromCart(item.id)
            ))
            setButonText("Order placed")
            setOrdered("Ordered!!!")
        }, 2000);
        

    }

    return (
        <main className="cart-page">
            <h1>Check out</h1>
            {cartItemElements}
            <p className="total-cost">Total: {(cartItems.length * 5.99).toLocaleString("en-US", {style: "currency", currency: "CHF"})}</p>
            <div className="order-button">
                {cartItems.length ? <button onClick={() => placeOrder()}>{buttonText}</button> : ""}
            </div>
            <h1>{ordered}</h1>
        </main>
    )
}

export default Cart
