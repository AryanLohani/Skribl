import {React, useState, useEffect} from "react";
import queryString from "query-string";
import io from "socket.io-client";
import { Container, Row, Col } from 'reactstrap';

import CInput from "./Input";
import Messages from "./Messages";
import Users from "./Users";
import "../static/Chat.css";

let socket;

const Chat = (props) =>{
    const [room , setRoom] = useState("");
    const [name , setName] = useState("");
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);
    const [users, setUsers] = useState([]);
    const ENDPOINT = 'https://0.0.0.0:8080';

    useEffect(() =>{
        const {name, room} = queryString.parse(props.location.search);
        setName(name);
        setRoom(room);
        socket = io(ENDPOINT, { transports : ['websocket'] });
        socket.emit("join" , {name, room}, (error) =>{
            if(error){
                alert(error);
            }
        });
        return () => {
            socket.disconnect();
            socket.off();
        }
    },[props.location.search]);

    useEffect(() =>{
        socket.on("message", (msg) => {
            setMessages((messages) => [...messages, msg]);
        });
        socket.on("user-list", ({users}) =>{
            setUsers(users);
        });
    },[]);

    const sendMessage = (event) => {
        event.preventDefault();
        if(message){
            socket.emit("sendMessage", message, () => {
                setMessage('');
            });
        }
        document.getElementById('msg').value = '';
    };

    return(
        <Container >
            <Row xs = "12" className="heading">
                <Col className = "text-center" tag = "h4">Room : {room}</Col>
            </Row>
            <Row className ="section-1">
                <Col md = "2" xs = "12">
                    <Users 
                        users = {users}
                    />
                </Col>
                <Col md = "7" xs = "12">

                </Col>
                <Col md = "3" xs = "12" className="side-chat">
                    <Messages 
                        name = {name}
                        messages={messages} 
                    />
                    <CInput 
                        sendMessage={sendMessage} 
                        setMessage={setMessage}
                    />
                </Col>
            </Row>    
        </Container>
    )
}

export default Chat;