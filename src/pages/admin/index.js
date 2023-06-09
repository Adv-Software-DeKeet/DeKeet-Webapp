import React from 'react'
import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import axios from "axios";
import User from './User';
import { baseurl } from '../../static/endpoints';

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
            if(!!idTokenResult.claims.admin){
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
        axios.get(baseurl+"/api/user")
       .then(function (response) {
           setUsers(response.data)
           console.log(response.data)
       })
      }

  return (
    <div>
        {users.map(user => (
            <User user={user}/>
            ))}
    </div>
  )
}

export default Admin;