import { useContext, useState } from "react";
import { MealContext } from "../MealContext";
import Spinner from "../Spinner/Spinner";
import {Link} from 'react-router-dom'



const Menu = () => {
    const { meals, chicken, desserts, lambs, pastas, miscellaneousMeal, loading } = useContext(MealContext);
  const [beef, setBeef] = useState(true);
  const [chiecken, setChicken] = useState(false);
  const [dessert, setDessert] = useState(false);
  const [lamb, setLamb] = useState(false);
  const [pasta, setPasta] = useState(false);
  const [Miscellaneous, setMiscellaneous] = useState(false);

  const handleBeef = () => {
    setBeef(true);
    setChicken(false)
    setDessert(false);
    setLamb(false)
    setPasta(false)
    setMiscellaneous(false)
  };

  const handleChicken = () => {
    setChicken(true)
    setBeef(false);
    setDessert(false);
    setLamb(false)
    setPasta(false)
    setMiscellaneous(false)
  };

  const handleDessert = () => {
    setDessert(true);
    setChicken(false)
    setBeef(false);
    setLamb(false)
    setPasta(false)
    setMiscellaneous(false)
  }

  const handleLamb = () => {
    setLamb(true)
    setDessert(false);
    setChicken(false)
    setBeef(false);
    setPasta(false)
    setMiscellaneous(false)
  }

  const handlePasta = () => {
    setPasta(true)
    setLamb(false)
    setDessert(false);
    setChicken(false)
    setBeef(false);
    setMiscellaneous(false)
  }

  const handleMissi = () => {
    setMiscellaneous(true)
    setPasta(false)
    setLamb(false)
    setDessert(false);
    setChicken(false)
    setBeef(false);
  }
    return ( 
        <div className="services-container">
          <p>Food Menu</p>
          <h1>Most Popular Items</h1>
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
        {
            loading ? (
                <Spinner/>
            ) : (
            <div className="meals-container">
          {beef && (
            <div className="beaf-container">
            {meals.map((meal) => (
              <Link to={`/meals/${meal.idMeal}`} key={meal.idMeal} className="beaf-item">
                <img src={meal.strMealThumb} alt={meal.strMeal} />
                <h3>{meal.strMeal}</h3>
              </Link>
            ))}
          </div>
          
          )}

          {
            chiecken && (
                <div className="beaf-container">
              {chicken.map((meal) => (
                <Link to={`/meals/${meal.idMeal}`} key={meal.idMeal} className="beaf-item">
                <img src={meal.strMealThumb} alt={meal.strMeal} />
                <h3>{meal.strMeal}</h3>
              </Link>
              ))}
            </div>
            )
          }

          {
            dessert && (
                <div className="beaf-container">
              {desserts.map((meal) => (
                <Link to={`/meals/${meal.idMeal}`} key={meal.idMeal} className="beaf-item">
                <img src={meal.strMealThumb} alt={meal.strMeal} />
                <h3>{meal.strMeal}</h3>
              </Link>
              ))}
            </div>
            )
          }

          {
            lamb && (
                <div className="beaf-container">
              {lambs.map((meal) => (
                <Link to={`/meals/${meal.idMeal}`} key={meal.idMeal} className="beaf-item">
                <img src={meal.strMealThumb} alt={meal.strMeal} />
                <h3>{meal.strMeal}</h3>
              </Link>
              ))}
            </div>
            )
          }

          {
            pasta && (
                <div className="beaf-container">
              {pastas.map((meal) => (
                <Link to={`/meals/${meal.idMeal}`} key={meal.idMeal} className="beaf-item">
                <img src={meal.strMealThumb} alt={meal.strMeal} />
                <h3>{meal.strMeal}</h3>
              </Link>
              ))}
            </div>
            )
          }

          {
            Miscellaneous && (
                <div className="beaf-container">
              {miscellaneousMeal.map((meal) => (
                <Link to={`/meals/${meal.idMeal}`} key={meal.idMeal} className="beaf-item">
                <img src={meal.strMealThumb} alt={meal.strMeal} />
                <h3>{meal.strMeal}</h3>
              </Link>
              ))}
            </div>
            )
          }
        </div>
            )
        }
      </div>
        </div>
     );
}
 
export default Menu;