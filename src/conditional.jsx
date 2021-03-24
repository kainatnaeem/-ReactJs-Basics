import React from 'react';


/*
Conditional rendering in React works the same way conditions work in JavaScript. 
Use JavaScript operators like if or the conditional operator to create elements representing
the current state, and let React update the UI to match them.

*/

//Example 1
// function Render(){
//  const marks = 80;
// return(
//     <div>
//     <h1>Welcome to Grading session</h1>
//     <p>{marks === 30 ? 'Grade B' : 'Grade A'} </p>
//     </div>)
// }
// export default Render;




//Example 2

/*

below we have the concept of && like one condition is user.length > 0 and if its true then run the second 
condition i.e the list we can have multpile conditions like if we assign user= undefined 
then it will gve us error but if we put a conditon with && by simply writing user



*/
// const user = undefined; 
// const user = ["happy", "sad"]; 
// function Render(){
//     return (
//         <div>
//             {user && user.length > 0 && (
//                 <div>
//                     <h1>User List: </h1>
//                     {
//                         user.map((users) =>(
//                           <li>{users}</li>
                
// ))}
//         </div>
//             )}
// </div>
// )
// }
// export default Render;
//
//Example 3
// const isLoggedIn = false;
// function Render(){
// return(
//     <div>
//     <h1>Welcome to my world</h1>
//  {isLoggedIn ? (
//         <h1> Hey, sweetheart!</h1>
    
//     ) : 
//     (
//         <div>
//         <h2> Please log in to continue </h2>
//         <button> login </button>
//         </div>)}
        
//     </div>)
// }
// export default Render;





//Example 4
function Render(){
    const [loggedIn,setloggedIn] = React.useState(false);
return(
    <div>
    <h1>Welcome to my world</h1>
    <button onClick ={()=>setloggedIn(!loggedIn)}>
        {loggedIn ? "Log out" : "Log in"}
    </button>
 {loggedIn ? (
        <h1> Hey, sweetheart!</h1>
    
    ) : 
    (
        <div>
        <h2> Please log in to continue </h2>
 
        </div>)}
        
    </div>)
}
export default Render;































