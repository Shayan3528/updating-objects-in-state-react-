import {useState} from 'react';

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
  }

  return(
    <>
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

