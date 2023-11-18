import React, { createContext, useEffect, useState } from "react";

export const MealContext = createContext();

const MealContextProvider = ({ children }) => {
  const [meals, setMeals] = useState([]);
  const [chicken, setChicken] = useState([]);
  const [desserts, setDessert] = useState([]);
  const [lambs, setLamb] = useState([]);
  const [pastas, setPasta] = useState([]);
  const [miscellaneousMeal, setMiscellaneous] = useState([]);
  const [loading, setLoading] = useState(true);
  const [mealDetails, setMealDetails] = useState(null);

  const fetchMealDetails = async (mealId) => {
    try {
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`);
      if (!response.ok) {
        throw new Error('Failed to fetch meal details');
      }
      const data = await response.json();

      if (data.meals && data.meals.length > 0) {
        const meal = data.meals[0];
        console.log(data)
        setMealDetails(meal);
        setLoading(false);
      } else {
        setMealDetails(null);
        setLoading(false);
      }
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    const fetchMeals = async (category, setState) => {
      try {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`);
        if (!response.ok) {
          throw new Error(`Failed to fetch meals for ${category}`);
        }
        const data = await response.json();
        const categoryMeals = data.meals.slice(0, 9);
        setState(categoryMeals);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };

    fetchMeals("Beef", setMeals);
    fetchMeals("Chicken", setChicken);
    fetchMeals("Dessert", setDessert);
    fetchMeals("Lamb", setLamb);
    fetchMeals("Pasta", setPasta);
    fetchMeals("Miscellaneous", setMiscellaneous);
  }, []);

  return (
    <MealContext.Provider
      value={{
        meals,
        chicken,
        desserts,
        lambs,
        pastas,
        miscellaneousMeal,
        loading,
        mealDetails,
        fetchMealDetails,
      }}
    >
      {children}
    </MealContext.Provider>
  );
};

export default MealContextProvider;
