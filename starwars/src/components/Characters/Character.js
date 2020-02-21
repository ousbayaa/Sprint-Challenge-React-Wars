import React, {useState, useEffect} from 'react';
import axios from 'axios';
import styled from 'styled-components';

const Person = styled.div `
    color: crimson;
    border: 3px inset dodgerblue;
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    margin-right: 30%;
    margin-left: 30%;
    background-color: rgba(255,182,193, 0.5);
`;

const Nombre = styled.h3 `
    color: lightgreen;
`

const Sex = styled.p `
    color: mediumpurple;
`

const Character = props => {
    

  return (
    <Person className="Character"> 
        <Nombre>Name: {props.name}</Nombre>
        <Sex>Gender: {props.gender}</Sex>
        <p>Birth Year: {props.birth}</p>
    </Person>
  );
}

export default Character;
