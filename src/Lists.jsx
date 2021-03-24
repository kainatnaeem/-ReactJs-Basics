import React from 'react';

/*
method used to traverse and display a list of similar objects of a component.
A map is not the feature of React. Instead, it is the standard JavaScript function 
that could be called on any array. The map() method creates a new array by calling
 a provided function on every element in the calling array.
*/


/*
we simply use maps in it defined an array of girl names
then used map and  recieve each name in girl var
bt if we want to show multiple attrubutes of girl like age id dob
we will have to use objects then, see example 2nd*/

//Example 1
// const girls=["nayab","kainat","neha"];
// function Mapss(){

// return(
//     <div>
//         {
//             girls.map((girl) => (
//                 <h4>{girl}</h4>
//             ))
//         }
//     </div>


// )

// }
// export default Mapss;


//Example 2
// const girls=[
//     {
//         name: "nayab",
//         age: "25"
//     },
//     {
//         name: "kainat",
//         age: "23"
//     },
//     {
//         name: "neha",
//         age: "20"
//     }
// ];
    
// function Mapss(){

// return(
//     <div>
//         {
//             girls.map((girl) => (
//              <div>
//                  <h5>Name: {girl.name} Age: {girl.age}</h5>
//                  </div>
//             ))
//         }
//     </div>


// )

// }
// export default Mapss;




//Example 3
/*
Keys
Keys help React identify which items have changed, are added, or are removed.
Keys should be given to the elements inside the array to give the elements a stable identity:
*/
function Mapss(){

//  const lists=[], //Try this too by commenting the next one
const lists=["black", "grey", "green"];

return(
     <div>
   
         {
             lists.length === 0 && "please create a new list!"  //&& operator in javascript is differnt from other languages
         }
         {
             <ul>{lists.map(list => <li key = {list}>{list}</li>)}</ul>
         }
     </div>
   
    );
       
   }
   export default Mapss;
   

