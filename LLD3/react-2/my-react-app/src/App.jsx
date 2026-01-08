import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
// import "./App.css";
import MyComponent from "./components/MyComponent";
import DisplayData from "./components/DisplayData";
import Message from "./components/Message";
import CustomButton from "./components/Button";
// import Counter from "./components/Count";
import UserCard from "./components/UserCard";
import user from "./Data/user";
import ProductList from "./components/Product";
import products from "./Data/product";
import ToDoList from "./components/ToDo";
import Form from "./components/Form";

function App() {
  const [count, setCount] = useState(0);
  const [temperature, setTemperature] = useState("");
  return (
    <div>
      {/* <Message isLoggedIn={true} /> */}
      {/* <CustomButton /> */}
      {/* <Counter /> */}
      {/* <UserCard user={user} /> */}
      {/* <ProductList products={products} /> */}
      {/* <ToDoList /> */}
      {/* <CounterDisplay value={count} /> */}
      {/* <Counter value={count} /> */}
      {/* <Form /> */}
      <TemperatureInput
        temperature={temperature}
        onTemperatureChange={setTemperature}
      />
      <TemperatureDisplay temperature={temperature} />
    </div>
  );
}

export default App;

// function CounterDisplay(props) {
//   return <div>{props.value}</div>;
// }
// function Counter(props) {
//   function increment() {
//     props.value = props.value + 1;
//   }
//   return <div>{props.value}</div>;
// }

function TemperatureInput({ temperature, onTemperatureChange }) {
  return (
    <div>
      <input
        value={temperature}
        onChange={(e) => onTemperatureChange(e.target.value)}
      />
    </div>
  );
}

// export default TemperatureInput;

function TemperatureDisplay({ temperature }) {
  // const [temperature, setTemperature] = useState("");
  const fahreinheit = (temperature * 9) / 5 + 32;

  return (
    <div>
      <p>{temperature} °C</p>
      <p>{fahreinheit} °F</p>
    </div>
  );
}
