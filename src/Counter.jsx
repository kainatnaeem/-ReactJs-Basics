import React from 'react';



/*
useState is a Hook (function) that allows you to have state variables in functional components.
You pass the initial state to this function and it returns a variable with the
current state value (not necessarily the initial state) and another function to update this value.
*/
const Counter = () => {
   const [count, setCount] = React.useState(1);// 0 is the initial value
  
   const handleInc = () => {
       setCount(count + 1);
   };
   const handleDec = () => {
    setCount(count - 1);
};
const handleMultiply = () => {
    setCount(count * 2);  // 2 table
};
return (
    <div>
        <p>The count is: {count}</p>
        <button onClick={handleInc}>Increment</button>
        <button onClick={handleDec}>Decrement</button>
        <button onClick={handleMultiply}>Multiply by 2</button>
    </div>
)

}
export default Counter;


  //another method is to directly call setCount and pass the argument to it  like:
       // <button onClick={()=>setCount(count+1)}>Increment</button>