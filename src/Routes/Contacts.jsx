import { useState } from "react";
import Spinner from "../Spinner/Spinner";
import axios from "axios";

const formDefault = {
  name: "",
  email: "",
  people: "",
  datetime: "",
  message: "",
};

const Contacts = () => {
  const [formData, setFormData] = useState(formDefault);
  const [loading, setLoading] = useState(false);
  const [succesMsg, setSuccessMsg] = useState(false);
  const { name, email, people, datetime, message } = formData;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post(
        "https://getform.io/f/4659f106-e544-4545-8c44-17e433a1265a",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200) {
        setSuccessMsg("Reservation Booked");
        setFormData(formDefault);
        setTimeout(() => {
          setSuccessMsg(false);
        }, 3000);
        setLoading(false);
      } else {
        setLoading(false);
      }
    } catch (error) {
      console.error("Error:", error);
      setLoading(false);
    }
  };

  return (
    <div className="services-container">
      <p>Our Services</p>
      <h1>Book A Reservation</h1>
      <div className="booking-container">
        <div className="pic-galary">
          <div className="box1">
            <img
              src="https://i.ibb.co/0BzgPZg/about-1.jpg"
              alt=""
              className="pic-1"
            />
            <img
              src="https://i.ibb.co/YfTVZWJ/about-2.jpg"
              alt=""
              className="pic-2"
            />
          </div>
          <div className="box2">
            <img
              src="https://i.ibb.co/2Z9vNRn/about-3.jpg"
              alt=""
              className="pic-3"
            />
            <img
              src="https://i.ibb.co/QCnRKH8/about-4.jpg"
              alt=""
              className="pic-4"
            />
          </div>
        </div>
        <div className="booking-form">
          <p>Reservation </p>
          <h1>Book A Table Online</h1>
          <form onSubmit={handleSubmit}>
            {loading && <Spinner />}
            <span>
              <input
                type="text"
                placeholder="Your Name"
                name="name"
                value={name}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                placeholder="Your Email"
                name="email"
                value={email}
                onChange={handleChange}
                required
              />
            </span>
            <span>
              <input
                type="text"
                placeholder="Date & Time"
                name="datetime"
                value={datetime}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                placeholder="No Of People"
                name="people"
                value={people}
                onChange={handleChange}
                required
              />
            </span>
            
            <textarea
              placeholder="Special Request"
              name="message"
              value={message}
              onChange={handleChange}
              required
            ></textarea>
            <button>BOOK NOW</button>
            {succesMsg && <p>{succesMsg}</p>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
