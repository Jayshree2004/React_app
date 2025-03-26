import React, { useState } from "react";
import AddUser from "./Components/AddUser";
import UserList from "./Components/Contact";

function App() {
    const [users, setUsers] = useState([]);

    const addUser = (user) => {
        setUsers([...users, user]);
    };

    const deleteUser = (index) => {
        setUsers(users.filter((_, i) => i !== index));
    };

    return (
        <div>
            <AddUser addUser={addUser} />
            <UserList users={users} deleteUser={deleteUser} />
        </div>
    );
}

export default App;
