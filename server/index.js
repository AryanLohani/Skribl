//require
const path = require('path');
const express = require('express');
const http = require('http');
const socketio = require('socket.io');
const router = require('./router');
const {addUser , deleteUser, getUser, getUsersInRoom} = require('./users');

//use
const app = express();
const server = http.createServer(app);
const io = socketio(server);
app.use(router);

//server
app.use(express.static(path.resolve(__dirname, '../client/build')));

// functionality
io.on('connection', (socket) => {
    socket.on('join', ({name,room}, callback) =>{
        const {error, user} = addUser(socket.id, name, room);
        if(error) return callback(error);

        //console on user joining
        console.log(`${user.name} has joined`);
        console.log(user);
        //
        socket.join(user.room);
        socket.emit("message", {user : "admin" , message : `Welcome ${name}`})
        socket.broadcast.to(user.room).emit("message", {user : "admin" , message : `${name} has joined`});
        
        const users = getUsersInRoom(user.room);
        io.to(user.room).emit("user-list", {users : users});
        callback();
    });

    socket.on('sendMessage', (message, callback) =>{
        const user = getUser(socket.id);
        io.to(user.room).emit("message", {user : user.name , message : message});
        callback();
    });

    socket.on('disconnect' ,() => {
        const user = deleteUser(socket.id);
        if(user !== -1){
            console.log(`${user.name} has disconnected`);
            io.to(user.room).emit("message" , {user : "admin" , message : `${user.name} has left`})
        }
    });
});

server.listen(process.env.PORT || 5000, () => {
    console.log(`listening to PORT ${5000}`);
});