import React from 'react';


/*
 The spread operator can be used to 
 take an existing array and add another element to it. 
*/
//Example 1
// let array1 = [20,30,40];
// let array2 = [50,60,70];

// array1 = array1.concat(array2);

// function Spread(){

//     return (
//         <div>
//             <p>{array1}
// </p>

//         </div>
//     )


// }
// export default Spread;

//above on is manual method but below is the spread concept


//Example 2
let arr1 = ["grey", "green", "peach"];
let arr2 = ["black"];

arr1 = [...arr1, ...arr2];

function Spread(){

    return (
        <div>
            <p>{arr1}
</p>

        </div>
    )


}
export default Spread;