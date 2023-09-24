import React, { useEffect, useState } from "react";
import PizzaCard from "./PizzaCard";
import NavBar from "./NavBar";

const FetchAPIData = () => {
  const [pizzaData, setPizzaData] = useState([]);
  const [restaurantData, setRestaurantData] = useState([]);

  useEffect(() => {
    // Setup proxy on package.json("proxy": "http://localhost:5555",) to allow use of a relative URL, ""
    fetch("/pizzas", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => setPizzaData(data.pizzas)); // Set the fetched data in the state
  }, []);

  useEffect(() => {
    // Setup proxy on package.json("proxy": "http://localhost:5555",) to allow use of a relative URL, ""
    fetch("/restaurants", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => setRestaurantData(data.restaurants)); // Set the fetched data in the state
  }, []);

  console.log(restaurantData);

  const pizzaList = pizzaData.map((pizza) => (
    <PizzaCard key={pizza.id} pizza={pizza} />
  ));

  return (
    <div className="mainContainer">
      <NavBar />
      <h4 style={{ fontWeight: "lighter", marginTop: "2rem" }}>
        Select a restaurant to view pizzas available at that location
      </h4>
      <div className="buttonsContainer">
        {restaurantData.map((restaurant) => (
          <button className="restaurantButtons">{restaurant.name}</button>
        ))}
      </div>

      <div className="pizzaCardsDiv">{pizzaList}</div>
    </div>
  );
};

export default FetchAPIData;
