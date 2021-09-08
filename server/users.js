users = []

const addUser = (id, name, room) =>{
    const user = {id, name, room};
    const exists = users.find((e) => 
        e.name === name && e.room === room
    );
    if(exists){
        return {error : "User Name is already taken"};
    }
    users.push(user);
    return {user : user};
}

const getUser = (id) => users.find((user) => user.id === id);

const deleteUser = (id) =>{
    const index = users.findIndex((user) => user.id === id);
    if(index !== -1) {
        return users.splice(index, 1)[0];
    }
    return index;
}

const getUsersInRoom = (room) =>{
    return users.filter((user) => user.room === room);
}

module.exports = {addUser , deleteUser, getUser, getUsersInRoom};