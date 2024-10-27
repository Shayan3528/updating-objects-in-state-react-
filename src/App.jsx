import { useState } from "react";

const initialList = [
  { id: 0, title: "Big Bellies" },
  { id: 1, title: "Lunar Landscape" },
  { id: 2, title: "Terracotta Army" },
];

export default function App() {
  const [list, setList] = useState(initialList);

  function handleClick() {
    const nextList = [...list];
    nextList.reverse();
    setList(nextList);
  }

  return (
    <>
      <button onClick={handleClick}> Reverse</button>
      <ul>
        {list.map((a) => (
          <li key={a.id}> {a.id+1}     {a.title} </li>
        ))}
      </ul>
    </>
  );
}
