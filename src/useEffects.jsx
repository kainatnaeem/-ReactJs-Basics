import React, { useEffect } from 'react';


/*
useEffect() — the hook that manages side-effects in functional React components
A functional React component uses props and/or state to calculate the output.
If the functional component makes calculations that don’t target the output
value, then these calculations are named side-effects.
Examples of side-effects are fetch requests, manipulating DOM directly,
using timer functions like setTimeout(), and more.
The component rendering and side-effect logic are independent.
So it would be a mistake to perform side-effects directly in the body of the component.

*/
function UseEffectExample(){
const [count, setCount]  = React.useState(0)
;  

//componentDidMounted as we are passig  item inthe array just remove teh item and check in console
// useEffect(()=>{
//     console.log("The use effect ran")
// }, [count])

//componentDidUpdate it will be clled when the value updated
// useEffect(()=>{
//     console.log("The use effect ran")
// }, [count])

//ComponentWillUnmount
 useEffect(()=>{
    console.log("The use effect ran");
    return () =>{
        console.log("The use effect return ran");
    }
}, )


return(

<div>
    <button onClick = {()=>setCount(count === 0)}> 

    {count === 0 ? "show counter" : "hide"}</button>
    {count > 0 ? <div><p>{count}</p>
<button onClick ={()=>setCount(count + 1)}>Increment</button></div> :  <div></div>} 


    </div>
   
    )



};
export default UseEffectExample;