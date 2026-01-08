import React, { useState } from "react";

function Form() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });
  //   const [email, setEmail] = useState("");
  function handleSubmit(event) {
    event.preventDefault();
    console.log(formData.name, formData.email);
  }
  function handleChange(event) {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        name="name"
        type="text"
        value={formData.name}
        onChange={handleChange}
      />
      <input
        name="email"
        type="email"
        value={formData.email}
        onChange={handleChange}
      />
      <p>{name}</p>
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
