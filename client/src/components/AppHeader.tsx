// import HeaderDropdown from './HeaderDropdown';
import '../assets/css/AppHeader.css';
import { Link } from 'react-router-dom'
import '@fortawesome/fontawesome-free/css/all.min.css';
import HeaderDropdown from "./HeaderDropdown";
import {useContext} from "react";
import {CartStore} from "../context/CartContext";

function AppHeader(){

    const cartInlineStyle = {
        fontSize: '40px',
        color: 'white'
    }

    const { cart } = useContext(CartStore);
    const cartQuantity = cart.reduce((total, item) => total + item.quantity, 0);
return (
    <header className="container">
        <link href='https://fonts.googleapis.com/css?family=Amatic SC' rel='stylesheet'/>
        <link href='https://fonts.googleapis.com/css?family=Allura' rel='stylesheet'/>
        <link href='https://fonts.googleapis.com/css?family=Inter' rel='stylesheet'/>
        <link href='https://fonts.googleapis.com/css?family=Amatic SC' rel='stylesheet'/>
        <link href='https://fonts.googleapis.com/css?family=Joti One' rel='stylesheet'/>
        <link href='https://fonts.googleapis.com/css?family=Italianno' rel='stylesheet'/>
        <link href='https://fonts.googleapis.com/css?family=Indie Flower' rel='stylesheet'/>
        <link href='https://fonts.googleapis.com/css?family=Bellota Text' rel='stylesheet'/>
        <link href='https://fonts.googleapis.com/css?family=Inknut Antiqua' rel='stylesheet'/>
        <link rel="stylesheet"
              href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
        <div className="first-section">
            <Link to="/">
                <img className="book-haven-logo"
                     src={require('../assets/images/Sanjna/Logo.jpg')}
                     alt="BookHaven Bookstore Logo"
                />
            </Link>
            {/*<a href="index.html" style="text-decoration: none;">*/}
            <h1 className="logo-text">Book Haven</h1>
            {/*</a>*/}

        </div>

        <div className="second-section">
            <input className="search-bar" type="text" placeholder="Search by Title, Author, Publisher "/>
            <div className="search-icon"><i className="fa fa-search"></i></div>
        </div>

        <div className="third-section">
            <div className="categories">
                <button className="categories-button">
                    {/*            <!-- <a href="category.html" style="text-decoration: none; color: white;"> -->*/}
                    Categories <i className="fa fa-angle-double-down"></i></button>
                {/*        <!-- </a> -->*/}
                <HeaderDropdown />

            </div>
            <Link to="/cart">
            <div className="cart">
                {/*<div className="cart-number"><b style={cartNumber}>2</b></div>*/}
                <div className="cart-number"><b>{cartQuantity}</b></div>
                <i className="fa fa-shopping-cart" style={cartInlineStyle}></i>
            </div>
            </Link>



            <div className="login">
                <button className="login-button"> Hello, Sign in <i className="fa fa-user"></i></button>
            </div>


        </div>

    </header>


)
}

export default AppHeader;

