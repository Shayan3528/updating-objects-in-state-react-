
import {useState} from 'react'
export default function App(){
  
  const [person, setPerson] = useState({
    fristName: "Barbara",
    lastName: "Hepworth",
    email: "shayan@gmail.com",
  });

  function handleFirstNameChange(e) {
    setPerson({
      ...person,
      fristName: e.target.value

    });
  }

  function hanleLastNameChange(e){
    setPerson({
        ...person,
        lastName: e.target.value
    });
  }
  function handleEmailChange(e){
    setPerson({
        ...person,
        email: e.target.value
    });
  }

  return(
    <>
    <label>
        First Name: 
        <input 
        value = {person.fristName} 
        onChange = {handleFirstNameChange}
        /> 
    </label>
    <label>
        Last Name: 
        <input 
        value = {person.lastName} 
        onChange = {hanleLastNameChange}
        /> 
    </label>
    <label>
        Email: 
        <input 
        value = {person.email} 
        onChange = {handleEmailChange}
        /> 
    </label>

    <p>
        <h1> {person.fristName} {'  '}  {person.lastName}</h1>
        <h2> {person.email}</h2>
        

    </p>
    
    </>
  );

}
   