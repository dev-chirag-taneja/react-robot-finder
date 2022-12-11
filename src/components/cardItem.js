import React from "react";

const CardItem = ({ item }) => {
  const { id, name } = item;
  return (
    <div className="card-items">
      <img src={`https://robohash.org/${id}?set=set2`} alt={`robot-${id}`} />
      <br></br>
      <h2>{name}</h2>
    </div>
  );
};

export default CardItem;
