import React from 'react';
import axios from 'axios';
import './Grocery.css';



export default function Grocery ({grocery, del}){

  return(
    <div>
  <div className="name">{grocery.Name.S}</div><div className="qty">{grocery.Quantity.N}</div><button className="delete" onClick={del}>X</button>
  </div>
  )
}