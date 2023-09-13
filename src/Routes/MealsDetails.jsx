import React, { useContext, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { MealContext } from '../MealContext';
import Spinner from '../Spinner/Spinner'

const MealsDetails = () => {
  const { mealId } = useParams();
  const { mealDetails, fetchMealDetails, loading } = useContext(MealContext);
  const navigate = useNavigate()

  useEffect(() => {
    fetchMealDetails(mealId);
  }, [mealId, fetchMealDetails]);

  return (
    <div className='meal-details-container'>
      {loading ? (
        <Spinner />
      ) : mealDetails ? (
        <div className='meals-details-card'>
          <div className="img">
          <img src={mealDetails.strMealThumb} alt={mealDetails.strMeal} />
          <h2>{mealDetails.strMeal}</h2>
          <ul>
          <h3>Ingredients:</h3>
            {Array.from({ length: 15 }, (_, index) => {
              const ingredientKey = `strIngredient${index + 1}`;
              const measureKey = `strMeasure${index + 1}`;
              const ingredient = mealDetails[ingredientKey];
              const measure = mealDetails[measureKey];
              return ingredient && measure ? (
                <li key={ingredientKey}>
                  {measure} {ingredient}
                </li>
              ) : null;
            })}
          </ul>
          </div>
          <div className="info">
          <h3>Instructions:</h3>
          <p>{mealDetails.strInstructions}</p>
          </div>
        </div>  
      ) : (
        <p>Meal not found.</p>
      )}
      <button onClick={() => navigate('/Menu')}>Back</button>
    </div>
  );
};

export default MealsDetails;
