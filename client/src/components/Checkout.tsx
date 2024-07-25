import React, {FormEvent} from 'react';
import {Link} from "react-router-dom";
import '../assets/css/CartTable.css';


import  "../assets/css/checkout.css"
import {getSubtotal,getTotal,getNumberOfItems} from "../reducers/CartReducer"; // Adjust path as necessary



//import { isCreditCard, isMobilePhone, isvalidEmail } from '../utils';
import {BookItem, CustomerForm, months, OrderDetails,  years} from "../types";
import {CartStore} from "../context/CartContext";
import {ChangeEvent, useContext, useState} from "react";
import { useNavigate} from "react-router-dom";
import {CartTypes} from "../reducers/CartReducer";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlusCircle} from "@fortawesome/free-solid-svg-icons/faPlusCircle";
import {faMinusCircle} from "@fortawesome/free-solid-svg-icons/faMinusCircle";
import axios from "axios";
import {isCreditCard, isMobilePhone, isvalidEmail} from "../utils";
import {OrderDetailsStore} from "../context/OrderContext";
import {OrderTypes} from "../reducers/OrderReducer";





function CheckoutPage() {
    const {dispatch: orderDispatch} = useContext(OrderDetailsStore);

    const getBookImageUrl = function (book: BookItem): string {
        let filename = book.title.toLowerCase();
        filename = filename.replace(/ /g, "-");
        filename = filename.replace(/'/g, "");
        filename = filename + ".jpg";
        try {
            return require('../assets/images/books/' + filename);
        } catch (_) {
            return require('../assets/images/books/the-iliad.gif');
        }
    };
    const handleContinueShopping = () => {
        // Navigate to the previous page
        navigate(-2);
    };

    /*
     * This will be used by the month and year expiration of a credit card
     *  NOTE: For example yearFrom(0) == <current_year>
    */

    async function submitOrder(event:FormEvent) {
        event.preventDefault();
        console.log("Submit order");
        const isFormCorrect =  isValidForm();
        console.log(isFormCorrect);
        if (!isFormCorrect) {
            setCheckoutStatus("ERROR");
        } else {
            setCheckoutStatus("PENDING");
            const orders = await placeOrder({
                name: formData.name,
                address: formData.address,
                phone: formData.phone,
                email: formData.email,
                ccNumber: formData.ccNumber,
                ccExpiryMonth: formData.ccExpiryMonth,
                ccExpiryYear: formData.ccExpiryYear,
            })
            if(orders) {
                setCheckoutStatus("OK");
                orderDispatch({ type: OrderTypes.DETAILS, orderDetails: orders });
                navigate('/confirmation');}
            else{
                setCheckoutStatus("SERVER_ERROR");
                console.log("Error placing order");
            }
        }
    }
    const placeOrder =  async (customerForm: CustomerForm) =>  {

        const order = { customerForm: customerForm, cart:{itemArray:cart} };

        const orders = JSON.stringify(order);
        // console.log("here you go", orders);     //you can uncomment this to see the orders JSON on the console
        const url = 'http://webdev.cs.vt.edu:8080/SanjnaBookstoreReactTransact/api/orders';
        const orderInfo: OrderDetails = await axios.post(url, orders,
            {headers: {
                    "Content-Type": "application/json",
                }
            })
            .then((response) => {
                dispatch({ type: "CLEAR" });
                return response.data;
            })
            .catch((error)=>console.log(error));
        console.log("order details: ", orderInfo);
        return orderInfo;
    }



    const {cart, dispatch} = useContext(CartStore);
    const navigate = useNavigate();


    const cartTotalPrice = getSubtotal(cart); // TO DO code that calculates the total price of your cart

    const cartQuantity = getNumberOfItems(cart); // TO DO the code that calculates the total number of items in your cart


    const [emailError, setEmailError] = useState("");
    const [creditError, setCreditError] = useState("");
    const [nameError, setNameError] = useState("");
    const [addressError, setAddressError] = useState("");
    const [mobileError, setMobileError] = useState("");

    // TO DO error states for the rest of the input elements

    //  const [formData, setFormData] = useState({name: "",address:"", phone:"",email: "",ccNumber: "", ccExpiryMonth:new Date().getMonth() + 1,ccExpiryYear:new Date().getFullYear()});
    const [formData, setFormData] = useState({
        name: "",
        address: "",
        phone: "",
        email: "",
        ccNumber: "",
        ccExpiryMonth: new Date().getMonth() + 1,
        ccExpiryYear: new Date().getFullYear(),
    });
    const [checkoutStatus, setCheckoutStatus] = useState("");

    function isValidForm() {
        let form_valid = true;


        if (formData.name === "") {
            setNameError("Name is a mandatory field!");
            form_valid = false;
        }

        if (formData.address === "") {
            setAddressError("Address is a mandatory field!");
            form_valid = false;
        }
        if (formData.email === "") {
            setEmailError("Email is a mandatory field!");
            form_valid = false;
        } else if (!isvalidEmail(formData.email)) {
            setEmailError("Invalid email format!");
            form_valid = false;
        }

        if (formData.phone === "") {
            setMobileError("Phone is a mandatory field!");
            form_valid = false;
        } else if (!isMobilePhone(formData.phone)) {
            setMobileError("Invalid phone number format!");
            form_valid = false;
        }
        if (formData.ccNumber === "") {
            setCreditError("Credit card is a mandatory field!");
            form_valid = false;
        } else if (!isCreditCard(formData.ccNumber)) {
            setCreditError("Invalid credit card number!");
            form_valid = false;
        }

        return form_valid;
    }

    // TO DO placeOrder function comes here. Needed for project 9 (not 8)

    function handleInputChange(event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) {

        const {name, value} = event.target;

        switch (name) {
            case "name":
                setFormData((prevFormData) => ({...prevFormData, [name]: value}));
                if (value.trim() === "") {
                    setNameError("Name is a required field!");
                } else if (value.length < 4 || value.length > 45) {
                    setNameError("Name must be atleast 4 characters long!");
                } else {
                    setNameError("");
                }
                break;
            case "address":
                setFormData((prevFormData) => ({...prevFormData, [name]: value}));
                if (value.trim() === "") {
                    setAddressError("Address is a required field!");
                } else if (value.length < 4 || value.length > 45) {
                    setAddressError("Address must be atleast 4 characters long!");
                } else {
                    setAddressError("");
                }
                break;
            case "phone":
                setFormData((prevFormData) => ({...prevFormData, [name]: value}));
                if (value.trim() === "") {
                    setMobileError("Phone number is a required field!");
                } else if (!isMobilePhone(value)) {
                    setMobileError("Phone number is not valid!");
                } else {
                    setMobileError("");
                }
                break;
            case "email":
                setFormData((prevFormData) => ({...prevFormData, [name]: value}));
                if (value.trim() === "") {
                    setEmailError("Email is a required field!");
                } else if (!isvalidEmail(value)) {
                    setEmailError("Email is not valid!");
                } else {
                    setEmailError("");
                }
                break;
            case "ccNumber":
                setFormData((prevFormData) => ({...prevFormData, [name]: value}));
                if (value.trim() === "") {
                    setCreditError("Card number is a required field!");
                } else if (!isCreditCard(value)) {
                    setCreditError("Invalid credit card number!");
                } else {
                    setCreditError("");
                }
                break;
            case "ccExpiryMonth":
            case "ccExpiryYear":
                setFormData((prevFormData) => ({...prevFormData, [name]: parseInt(value, 10)}));
                break;
            default:
                break;
        }
    }


    const updateBookQuantity = (bookId: number, quantity: number) => {
        if (quantity <= 0) {
            // If the quantity is 0 or less, remove the book from the cart
            removeBookFromCart(bookId);
        } else {
            // Otherwise, update the quantity of the book in the cart
            dispatch({type: 'UPDATE_QUANTITY', item: {bookId}, quantity});
        }
    };
    const removeBookFromCart = (bookId: number) => {
        dispatch({type: 'REMOVE', item: {bookId}});
    };

    // TO DO submitOrder function comes here. See the project Spec
    const yearFrom = (index: number) => new Date().getFullYear() + index;

    return (
        cart.length > 0 ? (
            <section className="checkout-table-view">

                <div
                    className={`checkout-page-body ${nameError || addressError || mobileError || emailError || creditError ? "show-errors" : ""}`}>
                    <div>
                        <form
                            className={`checkout-form ${nameError || addressError || mobileError || emailError || creditError ? "show-errors" : ""}`}
                            method="post">
                            <div>
                                <label htmlFor="fname">Name</label>
                                <input
                                    type="text"
                                    size={20}
                                    name="name"
                                    id="fname"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                />
                            </div>
                            {nameError && <div className="error">{nameError}</div>}
                            <div>
                                <label htmlFor="home-address">Address</label>
                                <input
                                    type="text"
                                    size={20}
                                    name="address"
                                    id="home-address"
                                    value={formData.address}
                                    onChange={handleInputChange}
                                />
                            </div>
                            {addressError && <div className="error">{addressError}</div>}
                            <div>
                                <label htmlFor="phone-number">Phone</label>
                                <input
                                    type="text"
                                    size={20}
                                    name="phone"
                                    id="phone-number"
                                    value={formData.phone}
                                    onChange={handleInputChange}
                                />
                            </div>
                            {mobileError && <div className="error">{mobileError}</div>}
                            <div>
                                <label htmlFor="email">Email</label>
                                <input
                                    type="text"
                                    size={20}
                                    name="email"
                                    id="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                />
                            </div>
                            {emailError && <div className="error">{emailError}</div>}
                            <div>
                                <label htmlFor="credit-card">Card</label>
                                <input
                                    type="text"
                                    size={20}
                                    name="ccNumber"
                                    id="credit-card"
                                    value={formData.ccNumber}
                                    onChange={handleInputChange}
                                />
                            </div>
                            {creditError && <div className="error">{creditError}</div>}
                            <div className="expiry-date">
                                <label htmlFor="ccExpiryMonth">Exp Date</label>
                                <div className="expiry-date-selects">
                                    <select
                                        style={{color: "black", marginRight: "1px"}}
                                        name="ccExpiryMonth"
                                        value={formData.ccExpiryMonth}
                                        onChange={handleInputChange}
                                    >
                                        {months.map((month, i) => (
                                            <option key={i} value={i + 1}>
                                                {month}
                                            </option>
                                        ))}
                                    </select>
                                    <select
                                        className="expiry-year-select"
                                        name="ccExpiryYear"
                                        value={formData.ccExpiryYear}
                                        onChange={handleInputChange}
                                    >
                                        {/*{years.map((year, i) => (*/}
                                        {/*    <option key={i} value={year}>*/}
                                        {/*        {year}*/}
                                        {/*    </option>*/}
                                        {/*))}*/}
                                        {Array.from({length: 15}, (_, i) => (
                                            <option key={i} value={yearFrom(i)}>
                                                {yearFrom(i)}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                        </form>
                    </div>

                    <form className="checkout-details" method="post">
                        <div className="checkout-money">
                            <div>
                                <span>Books ({cartQuantity})</span>
                                <span>: ${cartTotalPrice.toFixed(2)}</span>
                            </div>
                            <div>
                                <span>Shipping (3%)</span>
                                <span>: $5</span>
                            </div>
                            <div className="horizontal-line"></div>
                            <div className="final-checkout-price">
                                <span>Total</span>
                                <span>: ${(cartTotalPrice + 5).toFixed(2)}</span>
                            </div>
                        </div>
                        <div className="complete-div">
                            <button className="complete-button" onClick={submitOrder}>
                                Complete Purchase
                            </button>
                        </div>

                    </form>
                    <div>
                        {checkoutStatus !== "" ? (
                            <section
                                className={`checkoutStatusBox2 ${checkoutStatus === "PENDING" || checkoutStatus === "OK" ? "done" : ""}`}>
                                {checkoutStatus === "ERROR" && (
                                    <div className="error">Error: Please fix the problems above and try again.</div>
                                )}
                                {checkoutStatus === "PENDING" && (
                                    <div className="pending">Hold on, placing your order...</div>
                                )}
                                {checkoutStatus === "OK" && (
                                    <div className="success">Order placed!</div>
                                )}
                                {checkoutStatus === "SERVER_ERROR" && (
                                    <div className="server-error">An unexpected error occurred, please try again.</div>
                                )}
                            </section>
                        ) : (
                            <></>
                        )}
                    </div>
                </div>
                <div>
                    <ul className="checkout-cart-info">
                        {cart?.map((item, i) => (
                            <div className="checkout-cart-book-item" key={i}>
                                <div className="checkout-cart-book-image">
                                    <img
                                        src={getBookImageUrl(item.book)}
                                        alt="title"
                                        className="checkout-cart-info-img"
                                        width="20%"
                                        height="20%"
                                    />
                                </div>
                                <div className="checkout-cart-book-info">
                                    <div className="checkout-cart-book-title">{item.book.title}</div>
                                    <div
                                        className="checkout-cart-book-subtotal">${(item.quantity * item.book.price).toFixed(2)}</div>
                                    <div className="checkout-cart-book-quantity">

                                        <button className="dec-button"
                                                onClick={() => updateBookQuantity(item.id, Math.max(0, item.quantity - 1))}>
                                            <FontAwesomeIcon icon={faMinusCircle}/>
                                        </button>
                                        <span className="quantity">{item.quantity}</span>
                                        <button className="inc-button"
                                                onClick={() => updateBookQuantity(item.id, item.quantity + 1)}>
                                            <FontAwesomeIcon icon={faPlusCircle}/>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </ul>
                </div>
            </section>
        ) : (
            // <div className="cart-buttons-checkout">
            //     <div className="cart-info-checkout">
            //         Your shopping cart contains {cartQuantity} {'item' + (cartQuantity === 1 ? '' : 's')}
            //     </div>
            //     <div className="continue-shopping-checkout-container">
            //         <button className="continue-shopping-checkout" onClick={handleContinueShopping}>Continue Shopping
            //         </button>
            //     </div>
            //
            // </div>

            <div className="center-text">
                <br/>
                <ul>
                    <li className="list-heading">Please add some books.</li>
                </ul>

                <br/>
                <div className="center-text">
                    <div className="center-text">
                        {/*<Link to="/categories/romance" className="no-underline">*/}
                        {/*    <button className="button first-button-clear">Continue Shopping</button>*/}
                        {/*</Link>*/}
                        <button className="button first-button-clear" onClick={handleContinueShopping}>Continue
                            Shopping
                        </button>
                        <br/>
                        <br/>
                    </div>
                </div>
            </div>


        )
    )
        ;
}

export default CheckoutPage;