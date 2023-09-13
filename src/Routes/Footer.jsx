import { Link } from "react-router-dom";

const Footer = () => {
    return ( 
        <div className="footer-container">
            <div className="box-wrapper">
            <div className="box">
                <h2>Company</h2>
                <Link>About Us</Link>
                <Link>Contact Us</Link>
                <Link>Reservation</Link>
                <Link>Privacy Policy</Link>
                <Link>Terms & Condition</Link>
            </div>
            <div className="box">
                <h2>Contact</h2>
                <Link>123 Street, New York, USA</Link>
                <Link>+012 345 67890</Link>
                <Link>info@example.com</Link>
                <div className="social">
                <i className="fa-brands fa-square-facebook"></i>
                <i className="fa-brands fa-square-instagram"></i>
                <i className="fa-brands fa-square-twitter"></i>
                <i className="fa-brands fa-square-whatsapp"></i>
                </div>
            </div>
            <div className="box">
                <h2>Opening</h2>
                <Link>Monday - Saturday</Link>
                <Link>09AM - 09PM</Link>
                <Link>Sunday</Link>
                <Link>10AM - 08PM</Link>
            </div>
            <div className="box">
                <h2>Newsletter</h2>
                <p>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
                <input type="text" placeholder="Newletter" />
                <button>SUBCRIBE</button> 
            </div>
            </div>
            <div className="bottom">
                <p>&copy; 2023 All Right Reserved. this is made By NaseerCode with Love</p>
            </div>
        </div>
     );
}
 
export default Footer;