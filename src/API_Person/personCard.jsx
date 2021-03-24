import React from 'react';

import { useHistory } from "react-router-dom";


/*
The useHistory hook gives us access to the history instance without pulling it from props

when user click on a card e will navigate to the person.jsx page, which contain details of persn
*/
const PersonCard  = (props)=>{
const {person} = props;
const { id, name, email,phone,website} = person;
let history = useHistory();
  
return (
    <div
      style={{
        borderRadius: "25px",
        backgroundColor: "red",
        padding: "20px",
        width: "250px",
        margin: "15px",
      
        color:"white",
      
      }}
      onClick={() => history.push(`/person/${id}`)}
    >
      <h4> {name} </h4>
      <h6> {`email: ${email}`} </h6>
      <h6> {`phone: ${phone}`} </h6>
      <h6> {`website: ${website}`} </h6>
    </div>
  );

};
export default PersonCard;
