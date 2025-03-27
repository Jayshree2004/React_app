import React from "react";
import "../App.css";

function UserList({ users, deleteUser }) {
    return (
        <div className="user-list">
            <h2>Members Added</h2>
            {users.length > 0 ? (
                <ul>
                    {users.map((user, index) => (
                        <li key={index} className="user-item">
                            <span>
                                <strong>Name:</strong> {user.name} | <strong>Email:</strong> {user.email}
                            </span>
                            <button className="delete-btn" onClick={() => deleteUser(index)}>❌ Delete</button>
                        </li>
                    ))}
                </ul>
            ) : (
                <p className="empty-list">No members added yet.</p>
            )}
        </div>
    );
}

export default UserList;
