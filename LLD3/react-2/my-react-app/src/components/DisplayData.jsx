function DisplayData({ fruits, person }) {
  const handleClick = () => {
    console.log("clicked");
  };
  return (
    <div>
      <h2>Fruits</h2>
      <ul>
        {fruits.map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
      </ul>
      <h2>Person</h2>
      <p>Name: {person.name}</p>

      <p>Age: {person.age > 13 ? "alowed" : "not allowed"}</p>
      <button onClick={handleClick}>Ckick Me</button>
    </div>
  );
}

export default DisplayData;
