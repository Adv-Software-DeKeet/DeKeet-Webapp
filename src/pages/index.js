import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import '../styles/css/keet.css';
import Navbar from '../components/Navbar/index.js'
import { auth, logout } from "../firebase";
import axios from "axios";

const Keet = ({children}) => {
    const [user, loading, error] = useAuthState(auth);
    const [name, setName] = useState("");
    const [token, setToken] = useState("");
    const [role, setRole] = useState("");

    const test = () => {
        user.getIdToken(true).then(function(idToken) {
            setToken(idToken);
            axios.get("http://localhost:8092/auth/"+idToken)
            .then(function (response) {
                setToken(response);
            })
          }).catch(function(error) {
            console.log(error)
          });
    }

    const getRole = () => {
        user.getIdTokenResult()
        .then((idTokenResult) => {
            console.log(idTokenResult)
            if(!!idTokenResult.claims.host){
                setToken("host")
            }
            else if(!!idTokenResult.claims.admin){
                setToken("admin")
            }
        })
        .catch((error) => {
            console.log(error);
        });
    }

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
                <button className="dashboard__btn" onClick={test}>
                get
                </button>
                <button className="dashboard__btn" onClick={getRole}>
                get Role
                </button>
                {token}
                {role}
            </div>

        </div>
    )
}

export default Keet;