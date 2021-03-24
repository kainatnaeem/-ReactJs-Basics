

import React from 'react';
import "bootstrap/dist/css/bootstrap.css";

//Example 1
// class Form extends React.Component {
//   render() {
//     return (
//     	<form>
    
//     	<input 
//           type="text" 
//           placeholder="Enter your Name" 
//           required 
//         />
//         <button className =" btn btn-primary btn-large">submit!</button>
//     	</form>
//     );
//   }
// }
// export default Form;


//Example 2
/*
How to handle formsin React js?
we are using handler method inside input tag with onChange event
which will take the value ofinput and will assign to a variable
myName then we can use that value wherever we want! when we want to access input field value we will use event.target.value!

Handling forms is about how you handle the data when it changes value or gets submitted.
In HTML, form data is usually handled by the DOM.
In React, form data is usually handled by the components.
When the data is handled by the components, all the data is stored in the component state.
You can control changes by adding event handlers in the onChange attribute:

*/
// class Form extends React.Component {
// constructor(props){

//     super(props);
//     this.state={myName:''};
// }

// changeHandler=(event)=>{
//   this.setState({myName : event.target.value});
// }

//     render() {
//       return (
//          <form>
            
            
//              <input type = 'text'
// onChange={this.changeHandler}
// required
// placeholder ="Enter your nice name!"
// ></input>

// <h1> Hey: {this.state.myName}</h1>
//          </form>

//       );
//     }
//   }
//   export default Form;


//Example 3 
// class Form extends React.Component {
//     constructor(props) {
//       super(props);
//       this.state = { myName: '' };
//     }
//     myChangeHandler = (event) => {
//       this.setState({myName: event.target.value});
//     }
//     render() {
//       let head = '';
//       if (this.state.myName) {
//         head = <h1>Hey {this.state.myName}!</h1>;
//       } else {
//         head = '';
//       }
//       return (
//         <form>
//         {head}
//         <p>Enter your name:</p>
//         <input
//           type='text'
//           onChange={this.myChangeHandler}
//         />
//         </form>
//       );
//     }
//   } export default Form








//Example 4
//Alert on Submitting form

// class Form extends React.Component {
//     constructor(props) {
//       super(props);
//       this.state = { myName: '' };
//     }
//     alertHandler = (event) => {
//       event.preventDefault(); // its for prevention of auto-submission 
//       alert("Confirm to submit " + this.state.myName);
//     }
//     myChangeHandler = (event) => {
//       this.setState({myName: event.target.value});
//     }
//     render() {
//       return (
//         <form onSubmit={this.alertHandler}>
//         <h1>Hey {this.state.myName}!</h1>
//         <p>Enter your name and click submit</p>
//         <input
//           type='text'
//           onChange={this.myChangeHandler}
//         />
//      <button type = "submit" className =" btn btn-primary btn-large">Submit</button>
//         </form>
//       );
//     }
//   }
// export default Form  




//Example 5
/*
We are using multiple fields! we will use only one handler function every field will have its own name
we will use this name in changeHandle function for each field of form and then assign the values to these name variable


*/
//Validation of Form

class Form extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            myName : '',
            Email : null,
            age: null,
            phone:  null,
           address: 'its the text are field'

        };
    }

     changeHandler=(event)=>{
         let names = event.target.name;
         let values = event.target.value;
         this.setState({[names]:values});


     }   
     submitHandler= (event)=>{
         event.preventDefault();
         let myName = this.state.myName;
         let email = this.state.Email;
         let age = this.state.age;
         let phone = this.state.phone;
    if (myName == null || !Number(age) ||email == null ||!Number(phone)) {
        alert("Your name must not be null");

        alert("Your age must be a number");
        alert("Your phone must not be null");
      alert("Your email must not be null");
   
      
    }
     }  
     render(){
         return(
             
             <form  onSubmit={this.submitHandler}>
           <h1>My Form</h1>
            <input
            placeholder ="Enter your name:"
              type='text'
              name='myName'
              onChange={this.changeHandler}
            />
          <br></br><br></br>
          
          <input
            placeholder ="Enter your age:"
              type='number'
              name='age'
              onChange={this.changeHandler}
            />
          <br></br><br></br>
          
          <input
            placeholder ="Enter your phone:"
              type='text'
              name='phone'
              onChange={this.changeHandler}
            />
          <br></br><br></br>
            <input
            placeholder="Enter your Email:"
              type='text'
              name='Email'
              onChange={this.changeHandler}
            />      <br></br><br></br>
             <textarea value={this.state.description} placeholder = "Enter your address" />
             <br></br><br></br>
             <button type = "submit" className =" btn btn-primary btn-large">Submit</button>
 <h3>My name is {this.state.myName}</h3> 
 <h3>My age is {this.state.age}</h3>
 <h3>My phone number is {this.state.phone}</h3>
 <h3>My Email address is {this.state.Email}</h3>

            </form>
            
            )
   
    }


}export default Form;




