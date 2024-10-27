import { useState } from "react";

<<<<<<< HEAD
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
=======
let nextId = 3;

const initialArtists = [
  {id:0,name:'Shayan'},
  {id:1,name:'papon'},
  {id:2, name:'kishor'}
];

export default function App(){
  const [name,setName] = useState('');
  const [artists,setArtists]= useState(initialArtists);
  function handleClick(){
    const insertAt = 1;
    const nextArtists = [
      ...artists.slice(0,insertAt),
      {id:nextId++, name:name},
      ...artists.slice(insertAt)
    ];
    setArtists(nextArtists);
    setName('');
>>>>>>> 99e6de641d8984456dd97060285bd411bb0a5a7c
  }

  return (
    <>
<<<<<<< HEAD
      <button onClick={handleClick}> Reverse</button>
      <ul>
        {list.map((a) => (
          <li key={a.id}> {a.id+1}     {a.title} </li>
        ))}
      </ul>
    </>
  );
}
=======
      <input value= {name} onChange = {e=>setName(e.target.value)} />
      <button onClick = {handleClick}> 
        Insert
      </button>
      <ul>
        {artists.map(artist => (
          <li key = {artist.id}> {artist.name} </li>
        ))}
      </ul>
    </>
  )
}

>>>>>>> 99e6de641d8984456dd97060285bd411bb0a5a7c
