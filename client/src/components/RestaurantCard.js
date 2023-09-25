import React from "react";

const RestaurantCard = ({ restaurant, filterPizzasByRestaurant }) => {
  const restaurantId = restaurant.id;

  const onClickHandler = () => {
    filterPizzasByRestaurant(restaurantId);
  };
  return (
    <div>
      <button className="restaurantButtons" onClick={onClickHandler}>
        {restaurant.name}
      </button>
    </div>
  );
};

export default RestaurantCard;
