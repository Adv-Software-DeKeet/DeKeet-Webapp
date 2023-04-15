import React from 'react'
import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import Loader from '../../components/Loader';
import axios from "axios";

const Admin = () => {
    const [user, loading, error] = useAuthState(auth);
    const [users, setUsers] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        if (loading) {
          return;
        }
        user.getIdTokenResult()
        .then((idTokenResult) => {
            console.log(idTokenResult)
            if(!!idTokenResult.claims.default){
                fetchUsers()
            }
            else{
                navigate("/")
            }
        })
        .catch((error) => {
            console.log(error);
        });
      }, [user, loading]);

      const fetchUsers = () => { 
        axios.get("http://localhost:9080/api/user")
       .then(function (response) {
           setUsers(response.data)
           console.log(response.data)
       })
      }

  return (
    <div>
        <div>{users.map(userr => (<div>{userr.email}</div>))}</div>
    </div>
  )
}

export default Admin;   