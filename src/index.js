import React from "react";
import ReactDOM from "react-dom";

const img = "https://picsum.photos/200";

ReactDOM.render(
  <div>
    <h1 className="heading">MY Fav Items</h1>
    <img src={img} />

    <img
      className="food-img"
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUhMDyXNwSIsB-cC7B4wrM-jggKa3XoM7BRQ&usqp=CAU"
    />

    <img
      className="food-img"
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk4j7IyS4HfdMngnbKhujgxWvjvvOpEMo6lA&usqp=CAU"
    />

    <img
      className="food-img"
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSm-7c2V10j9K-3YUFUKfipkcyj-2E6kWgwYg&usqp=CAU"
    />
  </div>,
  document.getElementById("root")
);
