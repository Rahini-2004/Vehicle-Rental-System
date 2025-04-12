import React, { useState } from 'react';
import './SignUp.css';
import { useNavigate } from 'react-router-dom';
import source from './Logo_Gocars.png';

export function Signup() {
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");

    function handleSubmit(event){
        navigate("/login");
    };

    return (
        <div className="sign_up">
            <img src={source} alt="GoCars" id="logo" />
            <form className='sign_up_form' onSubmit={handleSubmit}>
                <h2 className='sign_up_heading'>Sign Up</h2>
                <div>
                    <label htmlFor="username">Username:</label>
                    <input id="username" type="text" onChange={(event) => setUsername(event.target.value)} />
                </div>
                <div>
                    <label id="lemail" htmlFor="email">Email:</label>
                    <input id="email" type="email" onChange={(event) => setEmail(event.target.value)} />
                </div>
                <button type="submit" className='sign_up_button'>SignUp</button>
                <p className='already_sign_in'>Already have an account? <a href="/login">Login</a></p>
            </form>
        </div>
    );
};