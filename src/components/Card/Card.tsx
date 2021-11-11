import React, { FC, useState } from "react";
import MasterCard from "../../assets/images/mastercard.png";
import "./Card.scss";

interface Props {
  spenditure: number;
  name: string;
  cardNumber: string;
}

const Card = ({ spenditure, name, cardNumber }: Props) => {
  var randomColors = [
    "red",
    "green",
    "blue",
    "magenta",
    "purple",
    "brown",
    "pink",
  ];

  const [color] = useState(
    randomColors[Math.floor(Math.random() * randomColors.length)]
  );

  return (
    <div className="card">
      <div className="top">
        <p> £{spenditure} spent</p>
        <h1 style={{ backgroundColor: `${color}` }}>{name[0]}</h1>
      </div>
      <div className="info">
        <h2>{name}</h2>
        <div className="cardNum">
          <img src={MasterCard} alt="no image" />
          **
          {cardNumber.substring(12, 16)}
        </div>
      </div>
    </div>
  );
};

export default Card;
