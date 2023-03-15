import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";import '../styles/css/keet.css';
import Navbar from '../components/Navbar/index.js'
import { auth, logout } from "../firebase";

const Keet = ({children}) => {
    const [user, loading, error] = useAuthState(auth);
    const [name, setName] = useState("");

    return(
        <div class="jpeg-container">
            <Navbar/>
           <div>
            {children}
           </div>
           <div className="dashboard__container">
                Logged in as
                <div>{name}</div>
                <div>{user?.email}</div>
                <button className="dashboard__btn" onClick={logout}>
                Logout
                </button>
            </div>
        </div>
    )
}

export default Keet;