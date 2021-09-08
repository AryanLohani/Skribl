import React from "react";
import "../static/Message.css";

const Message = ({index,user, name, message}) =>{
    var classes = (index%2===0 ? "odd ":" ");
    if(user === name) classes += "me";
    else if(user === "admin") classes += "admin";

    return(
        <div className = {`message ${(index%2===0 ? "odd": " ")}`}>
            <b className = {classes}> {user} :</b> {message}
        </div>
    );
};

export default Message;
