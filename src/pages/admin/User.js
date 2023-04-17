import React from 'react'
import { useEffect, useState } from 'react';
import axios from "axios";

const User = ({user}) => {
    const [email, setEmail] = useState("jovisimons009@gmail.com");
    const [uid, setUid] = useState("TgA51nLhDdcMZ6RuHXHvuI2D5PG3");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState(user.role);

    const updateUser = () => {
        axios.put("http://localhost:9080/api/user/"+uid, {
            uid: uid,
            email: email,
            role: role,
        })
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
                <div>Delete</div>
            </div> 
  )
}

export default User;