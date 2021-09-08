import React from "react";

import Message from "./Message";

const Messages = ({name, messages}) =>{
    return(
        <div>
            <p className = "text-center h4">Chat Box</p>
            {messages.map(({user,message} , i) => (
                <Message
                    key = {i}
                    index = {i}
                    user = {user}
                    message ={message}
                    name = {name}
                />
            ))}
        </div>
    );
};

export default Messages;
