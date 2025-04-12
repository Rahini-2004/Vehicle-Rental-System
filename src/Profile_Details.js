import React from "react";
import "./Profile_Details.css"; 
import source from "./Logo_Gocars.png";
import { useNavigate } from "react-router-dom";

export function Profile_Details(){

    const navigate = useNavigate();

    function clickBook(){
        navigate('/successful');
    }
    
    return(
        <div className="profile_details">
            <img src={source} alt="GoCars Logo" id="logo" /> 
            <h2 className="heading">Profile Details</h2>
            <form id="person_Details_form">
                <div>
                    <label>Email Address</label>
                    <input type="email" placeholder="example@gmail.com" className="input_profile" />
                </div>
                <div>
                    <label>First Name</label>
                    <input type="text" className="input_profile" />
                </div>
                <div>
                    <label>Last Name</label>
                    <input type="text" className="input_profile" />
                </div>
                <div>
                    <label>Date of Birth</label>
                    <input type="date" className="input_profile" />
                </div>
                <div>
                    <label>Phone Number</label>
                    <input type="text" className="input_profile" />
                </div>
                <div className="col-span-2">
                    <label>Gender</label>
                    <select className="input_profile">
                        <option value="">Select</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                    </select>
                </div>
                <div>
                    <label>From Place</label>
                    <input type="text" className="input_profile" />
                </div>
                <div>
                    <label>To Place</label>
                    <input type="text" className="input_profile" />
                </div>
                <div>
                    <label>Date</label>
                    <input type="date" className="input_profile" />
                </div>
                <div>
                    <label>Timing</label>
                    <input type="time" className="input_profile" />
                </div>
                <button className="book_now" onClick={clickBook}>Book Now</button>
            </form>
        </div>
    );
}



