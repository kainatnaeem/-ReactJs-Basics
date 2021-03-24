import React from 'react';
import Persons from './persons.jsx';
import Person from './person.jsx';
import {BrowserRouter as Router,Switch,Route } from 'react-router-dom';




/*In this API_person folder  I have 4 files in it 
routesTo contain our Router (
To enable routing in my React app, I first need to 
import BrowserRouter from react-router-dom,This should hold everything
 in the app where routing is needed. That means,
 if I need routing in my entire app,
I must wrap my higher component with BrowserRouter.)
Now for the routes renderening I imported Route(
the path of the route I use / to define the path of the home page
)
I used exact propert because everytime router wll see / it will 
consider every page started with / as home component,,,
now it will be rendered only if it matches the full path

I  am passing parameters to the person page i.e id 
we can use props manually but react router provide us the facility of using 
useParams(This hook helps us get the parameter passed on the URL without using the props object.)



*/
function ApiRoutes(){
    return(
        <div>
            <Router>
            <Switch>
                <Route exact path = "/" children ={<Persons />}/>
                <Route exact path = "/person/:id" children ={<Person />}/>
            </Switch>
            </Router>
        </div>
    )
}
export default ApiRoutes;