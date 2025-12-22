import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
// import "./App.css";
import MyComponent from "./components/MyComponent";
import DisplayData from "./components/DisplayData";

function App() {
  const fruits = ["Apple", "Bananna", "Cherry"];
  const person = {
    name: "React",
    age: 19,
  };
  return (
    <div>
      {/* <MyComponent message="Hello, from component One" />
      <MyComponent message="Hello, from component Two" />
      <MyComponent message="Hello, from component three" />
      <MyComponent message="Hello, from component four" />
      <MyComponent message="Hello, from component five" /> */}
      <DisplayData fruits={fruits} person={person} />
    </div>
  );
}

export default App;
