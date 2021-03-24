
import React , {useEffect} from 'react';
import {CircularProgress} from '@material-ui/core';

import axios from "axios";

import PersonCard from './personCard.jsx';


function Persons(){
    const[persons, setPersons]=React.useState()
;    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/users').then ((res)=>{
            const responsePersons = res.data;
            setPersons(responsePersons)
        });
      } , []);


return (
    <>
{persons ? (
    <div style={{margin:"40px", display: "flex", flexWrap: "wrap",border:"double", }}>
    {persons.map((person) => (
    <PersonCard key ={person.id} person ={person} />
))}
    </div>) : (<div><CircularProgress /></div>)}


</>
);

}
export default Persons;