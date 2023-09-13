import { useContext, useState } from "react";
import { MealContext } from "../MealContext";
import Spinner from "../Spinner/Spinner";
import ImageSwiper from "../Swapper/Swapper";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const formDefault = {
  name: "",
  email: "",
  people: "",
  datetime: "",
  message: "",
  time : "",
};

const Home = () => {
  const {
    meals,
    chicken,
    desserts,
    lambs,
    pastas,
    miscellaneousMeal,
    loading,
  } = useContext(MealContext);
  const navigate = useNavigate();
  const [beef, setBeef] = useState(true);
  const [chiecken, setChicken] = useState(false);
  const [dessert, setDessert] = useState(false);
  const [lamb, setLamb] = useState(false);
  const [pasta, setPasta] = useState(false);
  const [Miscellaneous, setMiscellaneous] = useState(false);

  const [formData, setFormData] = useState(formDefault);
  const [isloading, setLoading] = useState(false);
  const [succesMsg, setSuccessMsg] = useState(false);
  const { name, email, people, datetime, message, time } = formData;

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

  const handleBeef = () => {
    setBeef(true);
    setChicken(false);
    setDessert(false);
    setLamb(false);
    setPasta(false);
    setMiscellaneous(false);
  };

  const handleChicken = () => {
    setChicken(true);
    setBeef(false);
    setDessert(false);
    setLamb(false);
    setPasta(false);
    setMiscellaneous(false);
  };

  const handleDessert = () => {
    setDessert(true);
    setChicken(false);
    setBeef(false);
    setLamb(false);
    setPasta(false);
    setMiscellaneous(false);
  };

  const handleLamb = () => {
    setLamb(true);
    setDessert(false);
    setChicken(false);
    setBeef(false);
    setPasta(false);
    setMiscellaneous(false);
  };

  const handlePasta = () => {
    setPasta(true);
    setLamb(false);
    setDessert(false);
    setChicken(false);
    setBeef(false);
    setMiscellaneous(false);
  };

  const handleMissi = () => {
    setMiscellaneous(true);
    setPasta(false);
    setLamb(false);
    setDessert(false);
    setChicken(false);
    setBeef(false);
  };

  return (
    <div className="home-container">
      <div className="banner">
        <div className="info">
          <div className="box">
            <h1>Enjoy Our</h1>
            <h1>Delicious Meal</h1>
            <p>
              A symphony of flavors danced on our taste buds, as each bite of
              the exquisite meal transported you to a culinary paradise.
            </p>
            <button onClick={() => navigate("/Contacts")}>BOOK A TABLE</button>
          </div>
          <img src="https://i.ibb.co/5kpWvSB/hero.png" alt="" />
        </div>
      </div>
      <div className="offer-container">
        <div className="box">
          <i className="fa-solid fa-user"></i>
          <h2>Master Chefs</h2>
          <p>
            Our master chefs, culinary virtuosos, craft extraordinary flavors
            that redefine exquisite dining.
          </p>
        </div>
        <div className="box">
          <i className="fa-solid fa-utensils"></i>
          <h2>Quality Food</h2>
          <p>
            Quality food, our hallmark, elevates every dining experience to an
            exquisite standard.
          </p>
        </div>
        <div className="box">
          <i className="fa-solid fa-cart-plus"></i>
          <h2>Online Order</h2>
          <p>
            Online orders, our seamless convenience, bring gourmet delights to
            your doorstep with just a click.
          </p>
        </div>
        <div className="box">
          <i className="fa-solid fa-headphones"></i>
          <h2>24/7 Service</h2>
          <p>
            24/7 service: Our commitment to excellence ensures we're here for
            you, around the clock, delivering unparalleled dining experiences.
          </p>
        </div>
      </div>
      {loading ? (
        <Spinner />
      ) : (
        <div className="categories-container">
          <div className="categories">
            <ul>
              <li onClick={handleBeef}>Beef</li>
              <li onClick={handleChicken}>Chicken</li>
              <li onClick={handleDessert}>Dessert</li>
              <li onClick={handleLamb}>Lamb</li>
              <li onClick={handlePasta}>Pasta</li>
              <li onClick={handleMissi}>Miscellaneous</li>
            </ul>
          </div>
          <div className="meals-container">
            {beef && (
              <div className="beaf-container">
                {meals.map((meal) => (
                  <Link
                    to={`/meals/${meal.idMeal}`}
                    key={meal.idMeal}
                    className="beaf-item"
                  >
                    <img src={meal.strMealThumb} alt={meal.strMeal} />
                    <h3>{meal.strMeal}</h3>
                  </Link>
                ))}
              </div>
            )}

            {chiecken && (
              <div className="beaf-container">
                {chicken.map((meal) => (
                  <Link
                    to={`/meals/${meal.idMeal}`}
                    key={meal.idMeal}
                    className="beaf-item"
                  >
                    <img src={meal.strMealThumb} alt={meal.strMeal} />
                    <h3>{meal.strMeal}</h3>
                  </Link>
                ))}
              </div>
            )}

            {dessert && (
              <div className="beaf-container">
                {desserts.map((meal) => (
                  <Link
                    to={`/meals/${meal.idMeal}`}
                    key={meal.idMeal}
                    className="beaf-item"
                  >
                    <img src={meal.strMealThumb} alt={meal.strMeal} />
                    <h3>{meal.strMeal}</h3>
                  </Link>
                ))}
              </div>
            )}

            {lamb && (
              <div className="beaf-container">
                {lambs.map((meal) => (
                  <Link
                    to={`/meals/${meal.idMeal}`}
                    key={meal.idMeal}
                    className="beaf-item"
                  >
                    <img src={meal.strMealThumb} alt={meal.strMeal} />
                    <h3>{meal.strMeal}</h3>
                  </Link>
                ))}
              </div>
            )}

            {pasta && (
              <div className="beaf-container">
                {pastas.map((meal) => (
                  <Link
                    to={`/meals/${meal.idMeal}`}
                    key={meal.idMeal}
                    className="beaf-item"
                  >
                    <img src={meal.strMealThumb} alt={meal.strMeal} />
                    <h3>{meal.strMeal}</h3>
                  </Link>
                ))}
              </div>
            )}

            {Miscellaneous && (
              <div className="beaf-container">
                {miscellaneousMeal.map((meal) => (
                  <Link
                    to={`/meals/${meal.idMeal}`}
                    key={meal.idMeal}
                    className="beaf-item"
                  >
                    <img src={meal.strMealThumb} alt={meal.strMeal} />
                    <h3>{meal.strMeal}</h3>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
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
            {isloading && <Spinner />}
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
                type="date"
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
            <input type="time"  name="time" value={time} onChange={handleChange} />
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
      <div className="team-container">
        <p>Team Members</p>
        <h1>Our Master Chefs</h1>
        <div className="team-card-container">
          <div className="box">
            <img src="https://i.ibb.co/89mYz9x/Hilda-Baci-3.jpg" alt="" />
            <h2>Hilda Baci</h2>
            <p>Executive Chef</p>
          </div>
          <div className="box">
            <img
              src="https://i.ibb.co/bXLvZBH/Cuisine-Noir-Chef-Maame-Profile-Photo-copy.jpg"
              alt=""
            />
            <h2>Maame Boakye</h2>
            <p>Sous Chef</p>
          </div>
          <div className="box">
            <img src="https://i.ibb.co/dcCvFtd/Abiola-Akanji.jpg" alt="" />
            <h2>Abiola Akanji</h2>
            <p>Chef de Cuisine</p>
          </div>
          <div className="box">
            <img src="https://i.ibb.co/KGXw2hR/Chef-Dammy.jpg" alt="" />
            <h2>Chef Dammy</h2>
            <p>Pastry Chef</p>
          </div>
        </div>
      </div>
      <div className="our-client-container">
        <p>Testimonial</p>
        <h1>Our Clients Say!!!</h1>
        <ImageSwiper />
      </div>
    </div>
  );
};

export default Home;
