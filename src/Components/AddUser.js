import React, { useState } from "react";
import "../App.css";

function AddUser({ addUser }) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!name || !email) {
            alert("Please fill out all fields!");
            return;
        }

        console.log("Submitting user:", { name, email });

        addUser({ name, email });
        setName("");
        setEmail("");
    };

    return (
        <form className="user-form" onSubmit={handleSubmit}>
            <div className="input-group">
                <label>Name:</label>
                <input
                    type="text"
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </div>
            <div className="input-group">
                <label>Email:</label>
                <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <button type="submit" className="add-btn">Add</button>
        </form>
    );
}

export default AddUser;
