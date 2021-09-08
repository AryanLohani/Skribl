import { React, useState } from "react";
import { Link } from "react-router-dom";
import { Card, Button, CardTitle, CardHeader, Input,InputGroup} from 'reactstrap';

import "../static/Connect.css";

const Connect = () => {
    const [room, setRoom] = useState("");
    const [name, setName] = useState("");

    const validate = () => {
        return name !== "" && room !== "";
    };

    return (
        <div className= "main">
            <Card body>
                <CardHeader tag = "h4">SIGN IN FORM</CardHeader>
                <CardTitle tag="h6">Input your name and room id to enter the room</CardTitle>
                <InputGroup>
                    <Input placeholder = "Name" onChange={(e) => setName(e.target.value)}/>
                </InputGroup>
                <InputGroup>
                    <Input placeholder = "Room - Id" onChange={(e) => setRoom(e.target.value)}/>
                </InputGroup>

                <div>
                    <Link to={(validate() ? `/chat?name=${name}&room=${room}` : "/")}>
                        <Button color = "primary" >Sign In</Button>
                    </Link>    
                </div>
            </Card>
        </div>
        // <div className="heading">
        //     <div>
        //         <input placeholder="name" type="text" onChange={(e) => setName(e.target.value)} />
        //     </div>
        //     <div>
        //         <input placeholder="room" type="text" onChange={(e) => setRoom(e.target.value)} />
        //     </div>
        //     <Link to={(verify() ? `/chat?name=${name}&room=${room}` : "/")}>
        //         <button type="submit">Sign In</button>
        //     </Link>
        // </div>
    );
};

export default Connect;