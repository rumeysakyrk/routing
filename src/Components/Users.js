import React from 'react'
import {
  Link
} from "react-router-dom";
import { useState, useEffect } from 'react';
import axios from 'axios';

function Users() {
const [users, setUsers]= useState([]);
const [loading, setLoading]=useState(true);

useEffect(()=> {
  axios('https://jsonplaceholder.typicode.com/users')
  .then((res) => {setUsers(res.data)})
  .finally(()=>(setLoading(false)));
},[]);

  return (
    <div>
      <h1>Users</h1>
      <ul>
      {loading && <p>loading...</p>}
       {users.map(
        (user)=> (
          <li key={user.id}>
          <Link to={`/user/${user.id}`}>{user.name}</Link>
          </li>
       )
       )}
      </ul>
    </div>
  )
}

export default Users