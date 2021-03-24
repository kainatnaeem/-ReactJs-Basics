import React from 'react';


/*
simply passing parameters to props: its is an object which recieve multiple paramerters at a time
and makes an object called props.
OR
React is a component-based library which divides the UI into little reusable pieces. In some cases, those components need to communicate (send data to each other) and the way to pass data between components is by using props.
“Props” is a special keyword in React, which stands for properties and is being used for passing data from one component to another.
But the important part here is that data with props are being passed in a uni-directional flow. (one way from parent to child)
Furthermore, props data is read-only, which means that data coming from the parent should not be changed by child components.

*/

const Students =(props) => {
    console.log(props);
    const {name, age} = props;
    return(
        <div>
            <h2>
                Student Name: {name} whos age: {age}
            </h2>
        </div>
    )
};
export default Students;