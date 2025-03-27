import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import AddUser from "./Components/AddUser";
import UserList from "./Components/UserList";
import "./App.css";

function App() {
    const [users, setUsers] = useState([]);

    const addUser = (user) => {
        setUsers((prevUsers) => [...prevUsers, user]);
    };

    const deleteUser = (index) => {
        setUsers((prevUsers) => prevUsers.filter((_, i) => i !== index));
    };

    return (
        <div className="container">
            <h1>User Management</h1>
            <nav>
                <Link to="/">Home</Link> | <Link to="/members">Members Added</Link>
            </nav>

            <Routes>
                <Route path="/" element={<AddUser addUser={addUser} />} />
                <Route path="/members" element={<UserList users={users} deleteUser={deleteUser} />} />
            </Routes>
        </div>
    );
}

export default App;
