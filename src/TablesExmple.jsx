import React from 'react';


//also used CSS 
function Tables(){
 
 const [Table2, setTable2] =React.useState(2);
 const [Table3, setTable3] =React.useState(3);   
 const handleTable2=()=>{
     setTable2(Table2 * 2);
 }
 const handleTable3=()=>{
    setTable3(Table3 * 3);
}
 const styles = {
     fontSize:30,
     fontWeight:"bold",
     color: "red"
 };
 return(
     <div>
     <h1>Tables</h1>
     <span style ={styles}> {Table2}   <button className = "btn btn-secondary" onClick={handleTable2}>Table2</button> </span>
  
     <span style ={styles}> {Table3}   
     <button className = "btn btn btn-secondary" onClick={handleTable3}>Table3</button> </span>

  
     </div>

 );
    
}
export default Tables;
