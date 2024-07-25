
// import HomeCategoryList from './HomeCategoryList';

import '../assets/css/Home.css';
import {Link, useLocation} from "react-router-dom";





function Home() {
    const location = useLocation();
    const currentPath = location.pathname;

    const fourthTextInlineStyle = {
        fontSize: '20px',

    }
    const sixthTextInlineStyle = {

        paddingRight:'5px'
    }

    const title = '"Heartstopper": A sweet tale of first love and self-discovery by Alice Oseman.'
    // @ts-ignore
    return (
        <div className="home-body">
            <link href='https://fonts.googleapis.com/css?family=Amatic SC' rel='stylesheet'/>
            <link href='https://fonts.googleapis.com/css?family=Allura' rel='stylesheet'/>
            <link href='https://fonts.googleapis.com/css?family=Inter' rel='stylesheet'/>
            <link href='https://fonts.googleapis.com/css?family=Amatic SC' rel='stylesheet'/>
            <link href='https://fonts.googleapis.com/css?family=Joti One' rel='stylesheet'/>
            <link href='https://fonts.googleapis.com/css?family=Italianno' rel='stylesheet'/>
            <link href='https://fonts.googleapis.com/css?family=Indie Flower' rel='stylesheet'/>
            <link href='https://fonts.googleapis.com/css?family=Bellota Text' rel='stylesheet'/>
            <link rel="stylesheet"
                  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
            <div className="home-body-first-section">

                <img src={require('../assets/images/Sanjna/HomepageCover.png')}
                     className="home-body-image"/>


            </div>
            <div className="home-body-second-section">
                <div className="first-text">
                    <b>BOOK OF THE WEEK</b>
                </div>
                <div className="second-text">
                    <b>Heartstopper # 4: A Graphic Novel: Volume 4</b>
                </div>
                <div className="third-text">
                    By: Alice Oceman
                </div>
                <div className="fourth-text">
                    $18.
                    <span style={fourthTextInlineStyle}>00</span>
                </div>
                <div className="fifth-text">
                    {title}
                </div>
                <div className="sixth">
                    <Link to="/categories/romance">
                    <button className= "shop-now-button">
                        <i className="fa fa-shopping-cart"
                                                           style={sixthTextInlineStyle}></i> Shop Now
                    </button>


                    </Link>
                </div>

            </div>

        </div>
    )
}

export default Home;
