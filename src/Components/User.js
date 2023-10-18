import React from 'react'
import {
  useParams, Link
} from "react-router-dom";
import { useState, useEffect } from 'react';
import axios from 'axios';

function User() {
  const {id} =useParams();
  const [user, setUser]= useState([]);
  const [loading, setLoading]=useState(true);

useEffect(()=> {
  axios(`https://jsonplaceholder.typicode.com/users/${id}`)
  .then((res) => {setUser(res.data)})
  .finally(()=>(setLoading(false)));
},[id]);

  return (
    <div>
      <h1>User Details</h1>
      {loading && <p>loading...</p>}
     <code>{!loading && JSON.stringify(user)}</code>
     <br>
     </br>
     <Link to={`/user/${parseInt(id) +1}`}>Next User {(parseInt(id) +1)}</Link>
    </div>
  )
}

export default User