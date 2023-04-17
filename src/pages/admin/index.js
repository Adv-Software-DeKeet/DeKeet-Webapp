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

      const updateUser = () => {
        axios.put("http://localhost:9080/api/user", {
            uid: uid,
            email: email,
            role: role,
        })
      }

  return (
    <div>
        {users.map(user => (
            <div key={user.uid}>
                {user.email}
                 <div>
                    change password:
                    <input           
                        type="text"
                        className="login__textBox"
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"
                    />
                 </div>
                 <div>
                    change role:
                    <input           
                        type="text"
                        className="login__textBox"
                        value={user.role}
                        onChange={(e) => setRole(e.target.value)}
                        placeholder="Role"
                    />
                </div>
                <div onClick={() => updateUser()}>Save changes</div>
                <div>Delete</div>
            </div> 
            ))}
    </div>
  )
}

export default Admin;