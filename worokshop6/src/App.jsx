import { useState } from "react";
import "./App.css";

function Profile() {
  const [user, setUser] = useState({
    name: "John Doe",
    age: 31,
    city: "LA",
  });

  const handleAgeChange = (e) => {
    setUser({ ...user, age: e.target.value });
  };

  const handleNameChange = (e) => {
    setUser({ ...user, name: e.target.value });
  };

  const handleCityChange = (e) => {
    setUser({ ...user, city: e.target.value });
  };

  return (
    <div className="profile">
      <h1>User Profile</h1>

      <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>
      <p>City: {user.city}</p>

      <h2>Update User</h2>

      <input type="text" value={user.name} onChange={handleNameChange} />

      <input type="number" value={user.age} onChange={handleAgeChange} />

      <input type="text" value={user.city} onChange={handleCityChange} />
    </div>
  );
}

export default Profile;
