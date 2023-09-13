const Contacts = () => {
    return ( 
        <div className="services-container">
            <p>Our Services</p>
            <h1>Book A Reservation</h1>
           <div className="booking-container">
        <div className="pic-galary">
            <div className="box1">
                <img src="https://i.ibb.co/0BzgPZg/about-1.jpg" alt="" className="pic-1" />
                <img src="https://i.ibb.co/YfTVZWJ/about-2.jpg" alt=""  className="pic-2" />
            </div>
            <div className="box2">
                <img src="https://i.ibb.co/2Z9vNRn/about-3.jpg" alt="" className="pic-3"/>
                <img src="https://i.ibb.co/QCnRKH8/about-4.jpg" alt=""  className="pic-4"/>
            </div>
        </div>
        <div className="booking-form">
            <p>Reservation </p>
            <h1>Book A Table Online</h1>
            <form>
                <span>
                    <input type="text" placeholder="Your Name" />
                    <input type="text" placeholder="Your Email" />
                </span>
                <span>
                    <input type="text" placeholder="Date & Time" />
                    <input type="text" placeholder="No Of People" />
                </span>
                <textarea  placeholder="Special Request"></textarea>
                <button>BOOK NOW</button>
            </form>
        </div>
      </div>
        </div>
     );
}
 
export default Contacts;