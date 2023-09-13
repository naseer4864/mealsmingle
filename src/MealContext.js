import React, { createContext, useState, useEffect } from "react";


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
      console.log(data)

      if (data.meals && data.meals.length > 0) {
        const meal = data.meals[0];
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
    const fetchMeals = async () => {
      try {
        const response = await fetch(
          "https://www.themealdb.com/api/json/v1/1/filter.php?c=Beef"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch meals for Beef");
        }
        const data = await response.json();
        const beefMeals = data.meals.slice(0, 9);
        setMeals(beefMeals);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };

    fetchMeals();
  }, []);

  useEffect(() => {
    const fetchMeals = async () => {
      try {
        const response = await fetch(
          "https://www.themealdb.com/api/json/v1/1/filter.php?c=Chicken"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch meals for Chicken");
        }
        const data = await response.json();
        const chickenMeals = data.meals.slice(0, 9);
        setChicken(chickenMeals);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };

    fetchMeals();
  }, []);

  useEffect(() => {
    const fetchMeals = async () => {
      try {
        const response = await fetch(
          "https://www.themealdb.com/api/json/v1/1/filter.php?c=Dessert"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch meals for Dessert");
        }
        const data = await response.json();
        const dessertMeals = data.meals.slice(0, 9);
        setDessert(dessertMeals);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };

    fetchMeals();
  }, []);

  useEffect(() => {
    const fetchMeals = async () => {
      try {
        const response = await fetch(
          "https://www.themealdb.com/api/json/v1/1/filter.php?c=Lamb"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch meals for Lamb");
        }
        const data = await response.json();
        const lambMeals = data.meals.slice(0, 9);
        setLamb(lambMeals);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };

    fetchMeals();
  }, []);

  useEffect(() => {
    const fetchMeals = async () => {
      try {
        const response = await fetch(
          "https://www.themealdb.com/api/json/v1/1/filter.php?c=Pasta"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch meals for Pasta");
        }
        const data = await response.json();
        const pastaMeals = data.meals.slice(0, 9);
        setPasta(pastaMeals);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };

    fetchMeals();
  }, []);

  useEffect(() => {
    const fetchMeals = async () => {
      try {
        const response = await fetch(
          "https://www.themealdb.com/api/json/v1/1/filter.php?c=Miscellaneous"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch meals for Miscellaneous");
        }
        const data = await response.json();
        const miscellaneousMeals = data.meals.slice(0, 9);
        setMiscellaneous(miscellaneousMeals);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };

    fetchMeals();
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
        fetchMealDetails
        // mealPrice,
      }}
    >
      {children}
    </MealContext.Provider>
  );
};

export default MealContextProvider;
