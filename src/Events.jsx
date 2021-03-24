import React from 'react';

//Events
/*
An event is an action that could be triggered as a result of the user action or system generated
event. For example, a mouse click, loading of a web page, pressing a key, window resizes,
and other interactions are called events.
*/

//Example 1
// function Events(){
//     const [showData, setShowData] = React.useState("Data will be showing");
//     const handleShowData = () =>{
//         setShowData("An event is an action that could be triggered ");
//     }
//     return(
//         <div>
            
//             <h3>Events</h3>
//             <button onClick = {handleShowData}>Click to see the data </button>
//             <span><p>{showData}</p></span>
//         </div>

//     );
// }
// export default Events



//Example 2
 function Events(){
     const kill=()=>{
         alert("Killed");
     }
     return(
        <button onClick={kill}>kill him!</button>
     )

 }export default Events;