import React from 'react';
import './Outputting_list.css'
const OutputtingList = ({persons, deleteList}) =>{
     const person_array = persons.map(person =>{
      return person.age > 18 ? ( 
      <form key={person.id} className="list">
        <div>Name: {person.name}</div>
        <div>Age : {person.age}</div>
        <div>Nationality: {person.nationality}</div>
      <button onClick={ () => {deleteList(person.id)}}>Delete</button>
      </form>
         ) : (null)
     })
   return (
     <div>
      {person_array}
     </div>
    )
}

export default OutputtingList;