import React, { useEffect } from 'react';
import axios from "axios";



/*
I am simply getting the data from jsonPlaceholder which is fake api and applying 
the map  function on it

*/
const UserList = () => {
    const [users, setUsers] = React.useState();


useEffect(()=>{
    axios.get('https://jsonplaceholder.typicode.com/posts').then(res=>{

        const responseUsers = res.data;
        setUsers(responseUsers);
    });
},[]);
return(
    <div>
        <h1> Users</h1>
        {users && 
       users.slice(2,10).map((user)=> {
            const {id, userId, title, body} =user;
            return(
            <div key = {id}>
                <p><i>User Id</i>: {userId} || <i>Title</i>: {title} </p>
              <p><b>Body</b> : {body}</p>
            </div>
                );
        })}
    </div>


)}
export default UserList;


