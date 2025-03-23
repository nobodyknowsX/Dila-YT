import React from 'react';
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

function User(props) {
  const { _id, name, email, age, address } = props.user;
  const history = useNavigate();

  const deleteHandler = async () => {
    try {
      await axios.delete(`http://localhost:5000/users/${_id}`);
      history("/userdetails");  // Redirect to /userdetails after deletion
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  return (
    <div>
      <h1>User display</h1>
      <br />
      <h1>ID: {_id}</h1>
      <h1>Name: {name}</h1>
      <h1>Email: {email}</h1>
      <h1>Age: {age}</h1>
      <h1>Address: {address}</h1>
      <Link to={`/userdetails/${_id}`}>Update</Link>
      <button onClick={deleteHandler}>Delete</button>
      <br /><br /><br /><br />      
    </div>
  );
}

export default User;
