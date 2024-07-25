import '../assets/css/CategoryBookListItem.css';
import '../types'
import "../types";
import {BookItem} from "../types";
import {useContext} from "react";
import {CartStore} from "../context/CartContext";
import {CartTypes} from "../reducers/CartReducer";

const bookImageFileName =  (book:BookItem) => {
  let name = book.title.toLowerCase();
  name = name.replace(/ /g, "-");
  name = name.replace(/'/g, "");
    // name = name.replace(/-/g, "");
    console.log(name);
  return `${name}.jpg`;

};

function CategoryBookListItem(book:BookItem) {

const cartInlineStyling ={
    paddingRight:'8px'
    }
    const { dispatch } = useContext(CartStore);

    const addBookToCart = () => {
        dispatch({ type: CartTypes.ADD, item: book });
    };

return (

    <div className="category-body-card">
        <div className="category-card-first-section">
            {book.isPublic && (
                <button
                    className="read-now"
                >
                    {/*<i className="fas fa-book-reader"></i>*/}
                    <b>Read Now</b>
                </button>



            )}
            <img src={require('../assets/images/books/' + bookImageFileName(book))}
                 className="category-card-image"
                 alt="book.title"
            />
        </div>
        <div className="category-card-second-section">
            <div className="first-text-card">
                <b>{book.title}</b>
            </div>
            <div className="second-text-card">
                By: {book.author}
            </div>
            <div className="third-text-card">
                {/**$10.<span style="font-size: 20px;">99</span>*/}
                {/*${(props.price)}*/}
                ${(book.price).toFixed(2)}
            </div>
            <div className="fourth">
                {/*<button className="add-to-cart-button"><i className="fa fa-shopping-cart" style={cartInlineStyling}></i>Add*/}
                {/*    to Cart*/}
                {/*</button>*/}
                <button className="add-to-cart-button" onClick={addBookToCart}><i className="fa fa-shopping-cart" style={cartInlineStyling}></i>Add
                    to Cart
                </button>
            </div>

        </div>

    </div>


)
}

export default CategoryBookListItem;
