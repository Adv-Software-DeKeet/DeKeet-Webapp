import React from 'react'
import { useState } from 'react';
import axios from "axios";
import { baseurl } from '../../static/endpoints';

const User = ({user}) => {
    const [email, setEmail] = useState(user.email);
    const [uid, setUid] = useState(user.uid);
    const [password, setPassword] = useState("");
    const [role, setRole] = useState(user.role);

    const updateUser = () => {
        axios.put(baseurl+"/api/user/"+uid, {
            uid: uid,
            email: email,
            role: role,
        })
    }

    const deleteUser = () => {
        axios.delete(baseurl+"/api/user/"+uid)
    }

  return (
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
                        value={role}
                        onChange={(e) => setRole(e.target.value)}
                        placeholder="Role"
                    />
                </div>
                <div onClick={() => updateUser()}>Save changes</div>
                <div onClick={() => deleteUser()}>Delete</div>
            </div> 
  )
}

export default User;