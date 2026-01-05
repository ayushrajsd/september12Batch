const Button = () => {
  let count = 0;
  const increment = () => {
    // console.log("clicked", msg);
    console.log(count);
    count += 1;
  };
  return <button onClick={increment}>Click Me - {count}</button>;
};

export default Button;
