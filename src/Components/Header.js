import React, { useState } from "react";
import "../App.css";

function Header() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [users, setUsers] = useState([]);

    const handleSubmit = (event) => {
        event.preventDefault();

        if (!name && !email) {
            alert("Empty submission!");
        } else if (!name) {
            alert("Please fill the Name field!");
        } else if (!email) {
            alert("Please fill the Email field!");
        } else {
            const newUser = { name, email };
            setUsers([...users, newUser]);

            // Log user details to the console
            console.log("Added User:", newUser);

            setName("");
            setEmail("");
        }
    };

    return (
        <header>
            <h1>User Management</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name: </label>
                    <input
                        type="text"
                        name="name"
                        placeholder="Enter your name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div>
                    <label>Email: </label>
                    <input
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <button type="submit">Add</button>
            </form>
        </header>
    );
}

export default Header;
