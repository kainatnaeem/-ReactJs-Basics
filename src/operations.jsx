import React from 'react';

function Operation(){
    const add = 6 + 5;
    const sub = 6 - 5;
    const multiply = 6 * 5;
    const divide = 6 / 5;
    const mod = 6 % 5;
    
    return(
       <div> <h3>Arithmatic Operations:</h3> 
       <p>Addition of 6 + 5 = {add}</p>
       <p>Subtraction 6 - 5 = {sub}</p>
       <p>Multiplication 6 * 5 = {multiply}</p>
       <p>Division 6 / 5 = {divide}</p>
       <p>Module 6 % 5 = {mod}</p>
         </div>
   
    );

}
export default Operation;