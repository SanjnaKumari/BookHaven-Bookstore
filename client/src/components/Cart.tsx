import React, {useContext} from 'react';
import CartTable from './CartTable';
import '../assets/css/CartTable.css';
import { CartStore } from '../context/CartContext';
// @ts-ignore
import {Link, useNavigate} from "react-router-dom";


const Cart = () => {
    const navigate = useNavigate();

    const handleContinueShopping = () => {
        // Navigate to the previous page
        navigate(-1);
    };


    const { cart, dispatch } = useContext(CartStore);
    const totalBooks = cart.reduce((total, item) => total + item.quantity, 0);





    const clearCart = () => {
        dispatch({ type: 'CLEAR' });
    };



    return (
        <div>
            <br/>


            <div className="center-text">
                <ul>
                    {
                        totalBooks > 1 ? (
                            <li>Your shopping cart contains {totalBooks} books.</li>
                        ) : totalBooks === 1 ? (
                            <li>Your shopping cart contains 1 book.</li>
                        ) : (
                            <li  className="list-heading">Your shopping cart is empty.</li>
                        )
                    }
                </ul>
            </div>
            <br />
            {cart.length > 0 && (
                <>
                    <CartTable/>
                    <br/>
                    <div className="cart-buttons">
                        {/*<Link to="/categories/Romance" className="no-underline">*/}
                            <button className="button first-button" onClick={handleContinueShopping}>Continue Shopping</button>
                        {/*</Link>*/}
                        <Link to="/checkout" className="no-underline">
                            <button className="button second-button">Proceed to Checkout</button>
                        </Link>
                    </div>

                    <div className="center-text">
                        <button className="button pill-button blue-border-white-bg clear" onClick={clearCart}>
                            Clear Cart
                        </button>
                    </div>
                    <br/>
                </>
            )}
            {cart.length == 0 && (
                <div className="center-text">
                    <div className="center-text">
                        <Link to="/categories/romance" className="no-underline">
                            <button className = "button first-button-clear">Continue Shopping</button>
                        </Link>
                    </div>
                    <br/>
                </div>
            )}

        </div>
    );

}

export default Cart;