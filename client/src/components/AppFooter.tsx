import '../assets/css/AppFooter.css'
import {Link} from "react-router-dom";
import '@fortawesome/fontawesome-free/css/all.min.css';


function AppFooter(){
    const copyright = {
        fontSize:' 24px'
    }
    const footerLink = {
        fontSize: '24px' ,
        color: 'white',
        textDecoration:'none'

    }
return (
    // <footer className="container">
    //   <section className="links">
    //     <Link to="/">about</Link>
    //     <Link to="/">contact</Link>
    //     <Link to="/">directions</Link>
    //   </section>
    //   <section className="social-media-icons">
    //     <Link to="/" className="button">Facebook</Link>
    //     <Link to="/" className="button">Twitter</Link>
    //   </section>
    // </footer>
    <footer className="container">
        <div className="first-section-footer">
            <p className="copyright-para">
                <i className="fa fa-copyright" style={copyright}></i>
                2024 Sanjna Kumari. All rights reserved.

            </p>
        </div>

        <div className="second-section-footer links">
            <p>
                {/*<a href="index.html">*/}
                {/*    <i className="fa fa-info-circle" style={footerLink}>*/}

                {/*    </i>*/}
                {/*</a>*/}
                <Link to="/" className="fa fa-info-circle" style={footerLink}></Link>
            </p>
            About us
        </div>

        <div className="third-section-footer links">
            <p>
                {/*<a href="index.html" className="fa fa-map-marker"*/}
                {/*   style={footerLink}></a>*/}
                <Link to="/" className="fa fa-map-marker" style={footerLink}></Link>

            </p>
            Directions
        </div>

        <div className="fourth-section-footer links">
            <p>
                <Link to="https://www.facebook.com/" className="fa fa-facebook"></Link>
                <Link to="https://www.instagram.com/" className="fa fa-instagram"></Link>
                <Link to="https://twitter.com/?lang=en" className="fa fa-twitter"></Link>

            </p>
            Connect
        </div>

    </footer>
)
}

export default AppFooter;
