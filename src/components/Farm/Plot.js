import React from 'react';
import axios from 'axios';
import './Plot.css';


export default function Plot ({data, onClick}){
  
  return(
    <div>
  <button onClick={onClick}>{data.crop} {data.timeLeft}</button>
  </div>
  )
}