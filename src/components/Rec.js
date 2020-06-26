import React from "react";

const Rec = (props) => {
  return (
    <div>
      {props.data &&
        props.data.map((item) => (
          <div className="rec-items" key={item.id}>
            <h2>Title: {item.title}</h2>
            <h3>Source: {item.source}</h3>
            <h3>Ingredients: {item.ingredients}</h3>
            <h4>Instructions: {item.instructions}</h4>
            <h4>Category: {item.category}</h4>
            <h4>userId: {item.userId}</h4>
          </div>
        ))}
    </div>
  );
};
export default Rec;
