import {useState} from 'react';
let nextId = 0;

export default function App(){
  const [name,setName] = useState('');
  const [artists,setArtists] = useState([]);

  return (
    <>
      <h1>Inspiring Sculptors: </h1>
      <input
      value = {name}
      onChange = { e => setName(e.target.value)}
      /> 

      <button onClick = {() => {
        setArtists([
          ...artists,
          {id: nextId++,name:name}
        ])
      }}> Add
      </button>
      <ul>
        {artists.map(artists => (
          <li key = {artists.id} > {artists.name}</li>
        ))}
      </ul>
      
    </>
  );

}