import { useState } from "react";
export default function App() {
  const [person, setPerson] = useState({
    name: "Shayan",
    artwork: {
      title: "Blue Nana",
      city: "Dhaka",
    },
  });

  function handleChange(e) {
    setPerson({
      ...person,
      [e.target.name]: e.target.value,
    });
  }
  function handleArtwork(e) {
    setPerson({
      ...person,
      artwork: {
        ...person.artwork,
        [e.target.name]: e.target.value,
      },
    });
  }

  return (
    <>
      <label>
        Name:
        <input name="name" value={person.name} onChange={handleChange} />
      </label>
      <label>
        Title:
        <input
          name="title"
          value={person.artwork.title}
          onChange={handleArtwork}
        />
      </label>
      <label>
        City:
        <input
          name="city"
          value={person.artwork.city}
          onChange={handleArtwork}
        />
      </label>

      <p>
        <h3>{person.name}</h3> 
        <h3>{person.artwork.title}</h3>
        <h4> {person.artwork.city}</h4>
      </p>
    </>
  );
}
