import Card from "../UI/Card";
import MealItem from "./MealItem";
import classes from "./AvailableMeals.module.css";
import { useEffect, useState } from "react";

const AvailableMeals = () => {
  const [mealsData, setMealsData] = useState([]);
  const [error, setError] = useState(null);

  const mealsDataFetch = async () => {
    try {
      const response = await fetch(
          "https://react-http-9da4e-default-rtdb.firebaseio.com/meals.json"
        );
      if (!response.ok) {
        throw new Error("Something is wrong!");
      } 
      const data = await response.json();
      if (!data) {
        throw new Error('No data please check entered url..')
      }
      let mealsDataArray = [];
      for (const key in data) {
        mealsDataArray.push({
          id: key,
          name: data[key].name,
          description: data[key].description,
          price: data[key].price,
        });
      }

      setMealsData(mealsDataArray);

    } catch (err) {
      setError(err.message)
    }
  };

  useEffect(() => {
    mealsDataFetch();
  }, []);

  const meals = mealsData.map((meal) => (
    <MealItem
      id={meal.id}
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));
  return (
    <section className={classes.meals}>
      <Card>
        {!error && <ul>{meals}</ul>}
        {error && <ul>{error}</ul>}
      </Card>
    </section>
  );
};

export default AvailableMeals;
