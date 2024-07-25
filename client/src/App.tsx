import AppHeader from './components/AppHeader';
import AppFooter from './components/AppFooter';
import Home from './components/Home'
import CategoryBookList from './components/CategoryBookList';
import './App.css'
import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom"
import {useState,useEffect} from "react";
import axios from "axios";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import Confirmation from "./components/Confirmation";





function App() {


  return (
      <Router basename={'SanjnaBookstoreReactTransact'}>
          <div className="xyz">
        <AppHeader />

        <Routes>
          <Route path="/" element={<Home />} />
            <Route path="/categories" element={<CategoryBookList />} >
                <Route path=":id" element={<CategoryBookList   />} />
            </Route>
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/confirmation" element={<Confirmation />} />
          <Route path="*" element={<div>Page Not Found</div>} />
        </Routes>

        <AppFooter />
          </div>

      </Router>


  );
}

export default App;

