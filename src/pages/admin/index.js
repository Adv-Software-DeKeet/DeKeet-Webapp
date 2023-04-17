import React from 'react'
import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import axios from "axios";
import User from './User';

const Admin = () => {
    const [user, loading, error] = useAuthState(auth);
    const [users, setUsers] = useState([]);
    const [email, setEmail] = useState("jovisimons009@gmail.com");
    const [uid, setUid] = useState("TgA51nLhDdcMZ6RuHXHvuI2D5PG3");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState("");
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
        axios.get("http://localhost:9080/api/user")
       .then(function (response) {
           setUsers(response.data)
           console.log(response.data)
       })
      }

      const updateUser = () => {
        axios.put("http://localhost:9080/api/user/"+uid, {
            uid: uid,
            email: email,
            role: role,
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