import logo from "./logo.svg";
import "./App.css";
import Card from "./Card";

function App() {
  console.log("consoling app component");

  // JS logic
  let username = "Priya";
  let productName = "IPhone 14 Pro";
  let productName2 = "IPhone 15 Pro";
  let productName3 = "IPhone 15 Plus";

  return (
    <div className="App">
      This is an app component:
      <h1>Username: {username}</h1>
      <Card productName={productName} />
      <Card productName={productName2} />
      <Card productName={productName3} />
    </div>
  );
}

export default App;

// App - Parent Component
// Card - Child Component
