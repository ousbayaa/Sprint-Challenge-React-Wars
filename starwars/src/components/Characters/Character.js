import React, {useState, useEffect} from 'react';
import axios from 'axios';

const Character = props => {
    

  return (
    <div className="Character"> 
        <h3>Name: {props.name}</h3>
        <p>Gender: {props.gender}</p>
        <p>Birth Year: {props.birth}</p>
    </div>
  );
}

export default Character;
