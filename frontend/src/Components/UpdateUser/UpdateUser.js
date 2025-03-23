import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';  // Corrected imports

function UpdateUser() {
    const [inputs, setInputs] = useState({});
    const history = useNavigate();
    const { id } = useParams();  // Destructuring id from useParams

    useEffect(() => {
        const fetchHandler = async () => {
            await axios
                .get(`http://localhost:5000/users/${id}`)
                .then((res) => res.data)
                .then((data) => setInputs(data.user));
        };
        fetchHandler();
    }, [id]);

    const sendRequest = async () => {
        await axios.put(`http://localhost:5000/users/${id}`, {
            name: String(inputs.name),
            email: String(inputs.email),
            age: String(inputs.age),
            address: String(inputs.address),
        })
        .then((res) => res.data);
    };

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

    return (
        <div>
            <h1>Update User</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name:</label>
                    <input
                        type="text"
                        name="name"
                        value={inputs.name || ''}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        name="email"
                        value={inputs.email || ''}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div>
                    <label>Age:</label>
                    <input
                        type="number"
                        name="age"
                        value={inputs.age || ''}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div>
                    <label>Address:</label>
                    <textarea
                        name="address"
                        value={inputs.address || ''}
                        onChange={handleChange}
                        required
                    />
                </div>

                <button
                    type="submit"
                    style={{
                        marginTop: '10px',
                        padding: '10px',
                        background: '#007bff',
                        color: 'white',
                        border: 'none',
                        borderRadius: '5px',
                        cursor: 'pointer',
                    }}
                >
                    Submit
                </button>
            </form>
        </div>
    );
}

export default UpdateUser;
