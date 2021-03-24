import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Signup from './signup.jsx';
import About from './about.jsx';
import Home from './home.jsx';
import Contact from './contact.jsx';
import {useHistory} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.css";
/*
First I created Routers folder in which I created 4 files i.e:
home, about, contact, sign up
in this sction i will clear how to navigate to other pages in react js

what is Router ?? 
React Router is a standard library for routing in React.
It enables the navigation among views of various components in a React Application,
allows changing the browser URL, and keeps the UI in sync with the URL.

Import BrowserRouter, Route, and Switch from react-router-dom. 
BrowserRouter will be the base configuration. Switch will wrap the dynamic routes
and the Route component will configure specific routes and wrap the component that should render



Let us  understand



useHistory(When a user click on a link or button he will navigate to that page)
useHistory does a great job of showcasing React Hooks by separating access to 
the react-router history object into a cross-cutting concern and replaces the previous
cumbersome access via higher-order components or render-props that are now a thing of the past.


*/

function Routes(){
    const history =useHistory();
    return(
        <div> 
         
             <button className =" btn btn-danger btn-large" onClick ={()=> history.push("/home")}>Home</button>
             <button  className =" btn btn-warning btn-large" onClick ={()=> history.push("/about")}>About us</button>
             <button className =" btn btn-primary btn-large"  onClick ={()=> history.push("/contact")}>Contact us </button>
             <button className =" btn btn-danger btn-large" onClick ={()=> history.push("/signup")}>Sign up </button>
            <Switch>
             
                <Route exact  path ="/" render = {(props)=><Home {...props} />}><Home /></Route>
               
  <Route exact path ="/about" render = {(props)=><About {...props} />}><About /></Route>
                <Route exact path ="/contact" render = {(props)=><Contact {...props} />}><Contact /></Route>
                <Route exact path ="/signup" render = {(props)=><Signup {...props} />}><Signup /></Route>
            </Switch>


        </div>

    )
}export default Routes;