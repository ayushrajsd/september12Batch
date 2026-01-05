import { useState } from "react";

const toggleEmailVisibility = () => {
  setShowEmail(!showEmail);
};

const UserCard = ({ user }) => {
  const [showEmail, setShowEmail] = useState(false); // false

  console.log(user);
  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "20px",
        borderRadius: "8px",
        textAlign: "center",
      }}
    >
      <img
        src={user.picture.large}
        alt={user.name.first}
        style={{ borderRadius: "50%" }}
      />
      <h2>
        {user.name.first} {user.name.last}
      </h2>
      <p>
        Age: {user.dob.age} {user.dob.age > 18 ? "Major" : "Minor"}
      </p>
      <p>Location:</p>

      <button onClick={() => setShowEmail(!showEmail)}>
        {showEmail ? "Hide" : "Show"} Email
      </button>
      {showEmail && <p>Email: {user.email}</p>}
    </div>
  );
};

export default UserCard;
