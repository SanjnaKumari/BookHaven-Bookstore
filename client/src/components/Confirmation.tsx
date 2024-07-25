
import ConfirmationTable from "./ConfirmationTable";
import {useContext} from "react";
import {OrderDetailsStore} from "../context/OrderContext";
import {Link, useNavigate} from "react-router-dom";


function Confirmation()
{
    const navigate = useNavigate();
    const { orderDetails} = useContext(OrderDetailsStore);

    const orderDate =  () => {
        let date = new Date(orderDetails.order.dateCreated);
        return ( date.toLocaleString());
    };
    const ccExpDate =  (): Date =>{
        return new Date(orderDetails.customer.ccExpDate);
    };

    return(
        <div>
            {!orderDetails || !orderDetails.order ? (
                <>
                    <div className="center-text">
                        <p className="list-heading">We are sorry, your cart is empty, please add some books. </p>
                    </div>
                    <div className="center-text">
                        <Link to="/" className="no-underline">
                            <button className="button first-button-clear">Continue Shopping</button>
                        </Link>
                        {/*<button className="button pill-button white-border-gray-bg" onClick={() => navigate('/')}>Go to Home Page</button>*/}
                    </div>
                    <br/>
                </>
            ) : (
                    <div className="center-text">
                <ul>
                    <li><b>CONFIRMATION NO: {orderDetails.order.confirmationNumber}</b></li>
                    <br/>
                    <br/>
                    <li>Order Date: {orderDate()}</li>
                    <br/>
                    <br/>
                    <ConfirmationTable/>
                </ul>
                <div className="center-text">
                    <Link to="/" className="no-underline">
                    <button className="button first-button-clear">Continue Shopping</button>
                    </Link>
                </div>
                <br/>
            </div>
                )}
        </div>
    )
}

export default Confirmation;