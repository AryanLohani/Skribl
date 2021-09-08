import React from "react";
import "../static/Users.css"

const Users = ({users}) =>{

    return(
        <div className = "users">
            <p className = "text-center h4"> Users</p>
            {users.map((user, i) =>(
                <div key = {i} className = "user">
                    {user.name}
                </div>
            ))}
        </div>
    );
};

export default Users;