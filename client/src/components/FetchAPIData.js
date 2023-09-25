import React, { useEffect, useState } from "react";
import PizzaCard from "./PizzaCard";
import NavBar from "./NavBar";
import RestaurantCard from "./RestaurantCard";

const FetchAPIData = () => {
  const [pizzaData, setPizzaData] = useState([]);
  const [restaurantData, setRestaurantData] = useState([]);
  const [pizzasByRestaurantData, setPizzasByRestaurantData] = useState([]);
  const [restaurantPizzas, setRestaurantPizzas] = useState([]);

  useEffect(() => {
    // Setup proxy on package.json("proxy": "http://localhost:5555",) to allow use of a relative URL, ""
    fetch("https://flask-pizzeria-api.onrender.com/pizzas", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => setPizzaData(data.pizzas)); // Set the fetched data in the state
  }, []);

  useEffect(() => {
    // Setup proxy on package.json("proxy": "http://localhost:5555",) to allow use of a relative URL, ""
    fetch("https://flask-pizzeria-api.onrender.com/restaurants", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => setRestaurantData(data.restaurants)); // Set the fetched data in the state
  }, []);

  useEffect(() => {
    // Setup proxy on package.json("proxy": "http://localhost:5555",) to allow use of a relative URL, or use CORS""
    fetch("https://flask-pizzeria-api.onrender.com/restaurant_pizzas", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => setRestaurantPizzas(data.restaurant_pizzas)); // Set the fetched data in the state
  }, []);

  const filterPizzasByRestaurant = (id) => {
    console.log(id);

    const filteredPizzas = restaurantPizzas
      .filter((restaurant_pizza) => restaurant_pizza.restaurant_id == id)
      .map((restaurant_pizza) => restaurant_pizza.pizza);
    setPizzaData(filteredPizzas);
  };

  const pizzaList = pizzaData.map((pizza) => (
    <PizzaCard key={pizza.id} pizza={pizza} />
  ));

  const RestaurantList = restaurantData.map((restaurant) => (
    <RestaurantCard
      key={restaurant.id}
      restaurant={restaurant}
      filterPizzasByRestaurant={filterPizzasByRestaurant}
    />
  ));

  return (
    <div className="mainContainer">
      <NavBar />
      <h4 style={{ fontWeight: "lighter", marginTop: "2rem" }}>
        Select a restaurant to view pizzas available at that location
      </h4>
      <div className="buttonsContainer">{RestaurantList}</div>
      <div className="pizzaCardsDiv">{pizzaList}</div>
    </div>
  );
};

export default FetchAPIData;
