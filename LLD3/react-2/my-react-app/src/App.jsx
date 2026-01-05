import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
// import "./App.css";
import MyComponent from "./components/MyComponent";
import DisplayData from "./components/DisplayData";
import Message from "./components/Message";
import CustomButton from "./components/Button";
import Counter from "./components/Count";
import UserCard from "./components/UserCard";
import user from "./Data/user";
import ProductList from "./components/Product";
import products from "./Data/product";
import ToDoList from "./components/ToDo";

function App() {
  return (
    <div>
      {/* <Message isLoggedIn={true} /> */}
      {/* <CustomButton /> */}
      {/* <Counter /> */}
      {/* <UserCard user={user} /> */}
      {/* <ProductList products={products} /> */}
      <ToDoList />
    </div>
  );
}

export default App;
