import '../assets/css/ConfirmationTable.css'
// import { asDollarsAndCents } from "../utils";
import { BookItem, OrderDetails } from '../types'
import {OrderDetailsStore} from "../context/OrderContext";
import React, {useContext} from "react";
import {CartStore} from "../context/CartContext";
import {getSubtotal,getTotal,isEmpty} from "../reducers/CartReducer";
import '../assets/css/CartTable.css';
function ConfirmationTable() {
  const { orderDetails} = useContext(OrderDetailsStore);
  const {dispatch: orderDispatch} = useContext(OrderDetailsStore);

// A helper function - optional to use
  const bookAt = function (orderInfo: OrderDetails, index: number): BookItem {
  return orderInfo.books[index];





};
    const asDollarsAndCents = (price: number) => {
        return `$${price.toFixed(2)}`;
    };
    function cardFourDigits(ccNumber: string) {
        ccNumber = ccNumber.replace(/ /g, "").replace(/-/g, "");
        const fourDigits = ccNumber.slice(-4);
        return `**** **** **** ${fourDigits}`;
    }
    function Month(month: number) {
        return month < 10 ? `0${month+1}` : month.toString();
    }
  return (
      <div>
          <div className="cart-table">
              <ul className="list">
                  <li className="table-heading">
                      <div className="final-book">Book</div>
                      <div className="final-quantity">Quantity</div>
                      <div className="final-subtotal">Amount</div>
                  </li>
                  {orderDetails.lineItems?.map((item, index) => (
                      <React.Fragment key={index}>
                          <li className="center-order">
                              <div className="final-book">{orderDetails.books[index].title}</div>
                              <div className="final-quantity">{item.quantity}</div>
                              <div
                                  className="final-subtotal">{asDollarsAndCents(orderDetails.books[index].price * item.quantity)}</div>

                          </li>
                          <li className="line-break"></li>
                      </React.Fragment>
                  ))}


                  <li className="center-order">
                      <div className="shipping">
                          <b>
                              Shipping:
                          </b>

                      </div>
                      <div className="final-price">
                          <b>
                              $5
                          </b>


                      </div>


                  </li>
                  <li className="line-break"></li>
                  <li className="center-order">
                      <div className="shipping">
                          <strong>Total:</strong>
                      </div>
                      <div className="final-price">
                          <strong>{asDollarsAndCents(orderDetails.order.amount)}</strong>
                      </div>
                  </li>

                  <li className="line-break"></li>
              </ul>
          </div>

          <br/>
          <div className="center-text">
              -------------------------------------------------------------------------------------------------------------------------------------
          </div>
          <br/>
          <div className="center-text">
              <strong>CUSTOMER INFORMATION</strong>
          </div>
          <div className="confirmation-div">
              <div className="confirmation-cart-book-item">
                  <ul className="ul-customer">
                      <br/>
                      <li className="li-customer"><strong>Name: {orderDetails.customer.customerName}</strong></li>
                      <br/>
                      <br/>
                      <li className="li-customer"><b>Email: {orderDetails.customer.email}</b></li>
                      <br/>
                      <br/>
                      <li className="li-customer"><b>Address: {orderDetails.customer.address}</b></li>
                      <br/>
                      <br/>
                      <li className="li-customer"><b>Phone no: {orderDetails.customer.phone}</b></li>
                      <br/>
                      <br/>
                      <li className="li-customer"><b>Card no: {cardFourDigits(orderDetails.customer.ccNumber)}</b></li>
                      <br/>
                      <br/>
                      <li className="li-customer"><b>Card Expiry Date: ({Month(new Date(orderDetails.customer.ccExpDate).getUTCMonth())}/{Month(new Date(orderDetails.customer.ccExpDate).getUTCFullYear())})</b></li>
                      <br/>
                      <br/>
                  </ul>
              </div>
          </div>

      </div>


  )
}

export default ConfirmationTable;