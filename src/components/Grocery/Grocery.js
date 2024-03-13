import React from 'react';
import axios from 'axios';
import './Grocery.css';

var storedGrocery;

var handleDelete = event => {
  axios.delete('https://hjj41fkxn9.execute-api.us-west-2.amazonaws.com/dev/groc/' + storedGrocery)
    .then(res => {
      console.log(res);
      window.location.reload();
    }).catch(err =>{
      console.log(err);
    });
}

export default function Grocery ({grocery}){

  storedGrocery = grocery.Name.S

  return(
    <div>
  <div className="name">{grocery.Name.S}</div><div className="qty">{grocery.Quantity.N}</div><button className="delete" onClick={handleDelete}>X</button>
  </div>
  )
}