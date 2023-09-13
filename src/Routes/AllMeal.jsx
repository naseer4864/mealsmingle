import React, { useContext,  useState } from 'react';
import {  Link } from 'react-router-dom';
import { MealContext } from '../MealContext';
import Spinner from '../Spinner/Spinner';

const AllMeals = () => {
  const {  loading, meals, chicken, desserts, lambs, pastas, miscellaneousMeal } = useContext(MealContext);

  const [beef, setBeef] = useState(false);
  const [chickenSelected, setChicken] = useState(false);
  const [dessertSelected, setDessert] = useState(false);
  const [lambSelected, setLamb] = useState(false);
  const [pastaSelected, setPasta] = useState(false);
  const [miscellaneousSelected, setMiscellaneous] = useState(false);

  const handleBeef = () => {
    setBeef(true);
    setChicken(false);
    setDessert(false);
    setLamb(false);
    setPasta(false);
    setMiscellaneous(false);
  };

  const handleChicken = () => {
    setBeef(false);
    setChicken(true);
    setDessert(false);
    setLamb(false);
    setPasta(false);
    setMiscellaneous(false);
  };

  const handleDessert = () => {
    setBeef(false);
    setChicken(false);
    setDessert(true);
    setLamb(false);
    setPasta(false);
    setMiscellaneous(false);
  };

  const handleLamb = () => {
    setBeef(false);
    setChicken(false);
    setDessert(false);
    setLamb(true);
    setPasta(false);
    setMiscellaneous(false);
  };

  const handlePasta = () => {
    setBeef(false);
    setChicken(false);
    setDessert(false);
    setLamb(false);
    setPasta(true);
    setMiscellaneous(false);
  };

  const handleMiscellaneous = () => {
    setBeef(false);
    setChicken(false);
    setDessert(false);
    setLamb(false);
    setPasta(false);
    setMiscellaneous(true);
  };


  return (
    <div className='meal-container'>
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
              <li onClick={handleMiscellaneous}>Miscellaneous</li>
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
                    <img src={meal.strMealThumb} alt={meal.strMeal} loading="lazy" />
                    <h3>{meal.strMeal}</h3>
                  </Link>
                ))}
              </div>
            )}

            {chickenSelected && (
              <div className="beaf-container">
                {chicken.map((meal) => (
                  <Link
                    to={`/meals/${meal.idMeal}`}
                    key={meal.idMeal}
                    className="beaf-item"
                  >
                    <img src={meal.strMealThumb} alt={meal.strMeal} loading="lazy" />
                    <h3>{meal.strMeal}</h3>
                  </Link>
                ))}
              </div>
            )}

            {dessertSelected && (
              <div className="beaf-container">
                {desserts.map((meal) => (
                  <Link
                    to={`/meals/${meal.idMeal}`}
                    key={meal.idMeal}
                    className="beaf-item"
                  >
                    <img src={meal.strMealThumb} alt={meal.strMeal} loading="lazy" />
                    <h3>{meal.strMeal}</h3>
                  </Link>
                ))}
              </div>
            )}

            {lambSelected && (
              <div className="beaf-container">
                {lambs.map((meal) => (
                  <Link
                    to={`/meals/${meal.idMeal}`}
                    key={meal.idMeal}
                    className="beaf-item"
                  >
                    <img src={meal.strMealThumb} alt={meal.strMeal} loading="lazy" />
                    <h3>{meal.strMeal}</h3>
                  </Link>
                ))}
              </div>
            )}

            {pastaSelected && (
              <div className="beaf-container">
                {pastas.map((meal) => (
                  <Link
                    to={`/meals/${meal.idMeal}`}
                    key={meal.idMeal}
                    className="beaf-item"
                  >
                   <img src={meal.strMealThumb} alt={meal.strMeal} loading="lazy" />
                    <h3>{meal.strMeal}</h3>
                  </Link>
                ))}
              </div>
            )}

            {miscellaneousSelected && (
              <div className="beaf-container">
                {miscellaneousMeal.map((meal) => (
                  <Link
                    to={`/meals/${meal.idMeal}`}
                    key={meal.idMeal}
                    className="beaf-item"
                  >
                   <img src={meal.strMealThumb} alt={meal.strMeal} loading="lazy" />
                    <h3>{meal.strMeal}</h3>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default AllMeals;
