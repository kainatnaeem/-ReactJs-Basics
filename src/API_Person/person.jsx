import { useParams } from "react-router-dom";
import axios from "axios";
import { CircularProgress } from "@material-ui/core";

import React , {useEffect, useState} from 'react';
/*
useParams
This hook helps us get the parameter passed on the URL without using the props object.
*/
function Person() {
    const {id} = useParams();
    const [personDetails, setPersonDetails] = useState();
  
    useEffect(() => {
        axios
          .get(`https://jsonplaceholder.typicode.com/users/${id}`)
          .then((res) => {
            const responsePerson = res.data;
            setPersonDetails(responsePerson);
          });
      }, []);
      const { id: personId, name, email,phone,website } = personDetails || {};
      return (
        <div>

            <h1>Details of  {name}  </h1>
          {personDetails ? (
            <div    style={{
                borderRadius: "25px",
                backgroundColor: "brown",
                padding: "20px",
                width: "300px",
                margin: "50px",
              
                color:"white",
              
              }}>
              Person id: <h2> {` ${personId}`} </h2>
              Person name: <h1> {` ${name}`} </h1>
              Person email:  <h4> {` ${email}`} </h4>
              Person phone:    <h4> {` ${phone}`} </h4>
              Person website:   <h4><a href = "#">{` ${website}`}</a> </h4>
           
            </div>
          ) : (
            <CircularProgress />
          )}
        </div>
      );
    };
    
export default Person;

    