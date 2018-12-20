import React from "react";
import Card from "./Card";

const CardList = ({ robots }) => {
  console.log("cardlist");
  return (
    <div>
      {robots.map(robot => {
        return (
          <Card
            key={robot.id}
            id={robot.id}
            name={robot.name}
            username={robot.username}
            email={robot.email}
          />
        );
      })}
    </div>
  );
};

export default CardList;