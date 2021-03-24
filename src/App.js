import logo from './logo.svg';
import './App.css';
import Events from './Events.jsx';
import Operation from './operations.jsx';
import Counter from './Counter.jsx';
import Students from './props.jsx';
import Employee from './Employee.jsx';
import Mapss from './Lists.jsx';
import Spread from './spread.jsx';
import Render from './conditional.jsx';
import Tables from './TablesExmple.jsx';
import UseEffectExample from './useEffects.jsx';
import FormDesign from './Classes/designedForm.jsx';

import UserList from './API';
import Form from './Classes/form.jsx';
import {BrowserRouter as Router} from 'react-router-dom';
import Routes from './Routers/Navigation.jsx';
import ApiRoutes from './API_Person/routeTo.jsx';





function App() {
  const family = "A very good family";
  //inorder to use maps then use the following method
const studentinfo = [
  {
      name :"kainat",
      age: "23"
  },
 
]
  return (
    <div>
      <header >
 

  
{/*  
   <FormDesign />
    <h1>React js Basics</h1>
    <p>=================================Operations=================================</p>
    <Operation/>
    <p>=======================Employee(Destructures concept)=========================</p>
    <Employee />
    <p>===============================props==============================</p>
    <Students name = "kainat" age = "23" rollno ="43" />
    <p>=================================Lists=================================</p>
    <Mapss/>
    <p>============================spread concept==============================</p>
    <Spread />
    <p>===========================Conditional Render============================</p>
    <Render />
    <p>===========================Counter Example===========================</p>
    <Counter />
    <p>=================================Events=================================</p>
    <Events />
    <p>=============================Tables Example============================</p> 
    <Tables />
    <p>===========================UseEffect=============================</p>
    <UseEffectExample /> 
    <p>==============================API Call===============================</p>
    <UserList />  
     <p>=============================Form===============================</p>
      <Form />

    <p>===============================Routers===============================</p> 
    <Router><Routes  /></Router> 
    <p>===============================API Routes===============================</p> 
    <ApiRoutes />

    */
    
    
    }
    
    

   
      </header>
    </div>
  );
}

export default App;
