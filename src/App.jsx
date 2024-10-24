import { useState } from "react";
export default function App() {
  const [person, setPerson] = useState({
    firstName: "Barbara",
    lastName: "Hepworth",
    email: "shayan@gmail.com",
  });

  function handleChange(e) {
    setPerson({
      ...person,
      [e.target.name]: e.target.value
    });
  }

  return (
    <>
      <label>
        First Name:
        <input name="firstName" value={person.firstName} onChange={handleChange} />
      </label>
      <label>
        Last Name:
        <input name = "lastName" value={person.lastName} onChange={handleChange} />
      </label>
      <label>
        Email:
        <input  name= "email" value={person.email} onChange={handleChange} />
      </label>

      <p>
        <h1>
          {person.firstName} {"  "} {person.lastName}
        </h1>
        <h2> {person.email}</h2>
      </p>
    </>
  );
}
