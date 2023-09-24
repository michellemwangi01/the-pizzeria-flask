import React from "react";

const PizzaCard = ({ pizza }) => {
  return (
    <div
      class="card"
      key={pizza.id}
      style={{
        border: "1px solid #0c0c4c",
        width: "400px",
        minHeight: "400px",
        margin: "10px",
        marginBottom: "15px",
      }}
    >
      <img
        src={pizza.image}
        class=""
        alt="pizza image"
        style={{ height: "250px", width: "400px", objectFit: "cover" }}
      />
      <div class="card-body">
        <h2
          class="card-text"
          style={{
            padding: "2px",
            border: "none",
            textAlign: "center",
            fontFamily: "cursive",
          }}
        >
          {pizza.name}
        </h2>
      </div>
      <ul
        class=""
        style={{ padding: "5px", border: "none", textAlign: "center" }}
      >
        <ul
          class=""
          style={{
            padding: "0px",
            borderBottom: "1px solid",
            color: "blue",
            fontSize: "20px",
            padding: "0",
            fontFamily: "cursive",
          }}
        >
          KSH 0.00
        </ul>
        <ul
          class=""
          style={{
            padding: "0px",
            borderBottom: "0px",
            color: "black",
            fontSize: "22px",
            fontFamily: "cursive",
          }}
        >
          Ingredients: {pizza.ingredients}
        </ul>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            borderBottom: "1px solid ",
          }}
        ></div>
      </ul>
      <div class="card-body"></div>
    </div>
  );
};

export default PizzaCard;
