import React from "react";
import "../App.css"; 


function Header() {
    return (
        <header>
            <h1>User Management</h1>
            <form>
                <div>
                    <label>Name: </label>
                    <input type="text" name="name" placeholder="Enter your name" />
                </div>
                <div>
                    <label>Email: </label>
                    <input type="email" name="email" placeholder="Enter your email" />
                </div>
                <button type="submit">Add</button>
            </form>
        </header>
    );
}

export default Header;
