import { Fragment, useState } from "react";
import {Link , Outlet, useNavigate} from 'react-router-dom'

const Navbar = () => {
    const [isMobile, setIsMObile] = useState(false)
    const navigate = useNavigate()
    const hsnleclick = () => {
        setIsMObile(!isMobile)
    }
    return ( 
        <Fragment>
            <div className="navbar-container">
                <Link className="logo" to='/'><i className="fa-solid fa-utensils"></i> MEALMINGLE</Link>
            <div className={`nav-links ${isMobile ? "mobile-link active" : ""}`} onClick={() => setIsMObile(false)}>
                <Link to='/'>HOME</Link>
                <Link to='/Menu'>MENU</Link>
                <Link to='/Contacts'>CONTACTS</Link>
                <Link to='/Services'>SERVICES</Link>
                <button onClick={() => navigate('/Contacts')}>BOOK A TABLE</button>
            </div>
            <div className="menu-bars" onClick={hsnleclick}>
            <i className="fa-solid fa-bars"></i>
            </div>
            </div>
            <Outlet/>
        </Fragment>
     );
}
 
export default Navbar;