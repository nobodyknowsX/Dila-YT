import React, { useState } from 'react';
import Nav from '../Nav/Nav';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function AddUser() {
    const history = useNavigate();
    
    // State to store form inputs
    const [inputs, setInputs] = useState({
        name: "",
        email: "",
        age: "",
        address: "",
    });

    // Handle input changes
    const handleChange = (e) => {
        setInputs((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(inputs);
        sendRequest().then(() => history('/userdetails'));
    };

    // Send request to backend
    const sendRequest = async () => {
        await axios.post("http://localhost:5000/users", {
            name: String(inputs.name),
            email: String(inputs.email),
            age: String(inputs.age),
            address: String(inputs.address),
        }).then(res => res.data);
    };

    return (
        <div style={{ maxWidth: "400px", margin: "auto", padding: "20px", border: "1px solid #ccc", borderRadius: "10px" }}>
            <Nav/>
            <h2>User Form</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name:</label>
                    <input type="text" name="name" value={inputs.name} onChange={handleChange} required />
                </div>

                <div>
                    <label>Email:</label>
                    <input type="email" name="email" value={inputs.email} onChange={handleChange} required />
                </div>

                <div>
                    <label>Age:</label>
                    <input type="number" name="age" value={inputs.age} onChange={handleChange} required />
                </div>

                <div>
                    <label>Address:</label>
                    <textarea name="address" value={inputs.address} onChange={handleChange} required />
                </div>

                <button type="submit" style={{ marginTop: "10px", padding: "10px", background: "#007bff", color: "white", border: "none", borderRadius: "5px", cursor: "pointer" }}>
                    Submit
                </button>
            </form>
        </div>
    );
}

export default AddUser;
