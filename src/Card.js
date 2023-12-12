import "./Card.css";
import Button from "./Button";

function Card(props) {
  console.log("Props: ", props);
  return (
    <div className="card-container">
      This is a card component
      <h1>Product Name : {props.productName}</h1>
      <Button />
    </div>
  );
}

export default Card;

// Card - Parent Component
// Button - Child Compeont
