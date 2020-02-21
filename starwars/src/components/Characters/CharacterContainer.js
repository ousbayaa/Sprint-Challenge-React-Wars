import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Character from './Character'

const CharacterContainer = props => {
    

  return (
    <div className="CharacterContainer"> 
        {props.data.map((char)=> (
            <Character name={char.name} gender={char.gender} birth={char.birth_year}/>
        ))}
    </div>
  );
}

export default CharacterContainer;
