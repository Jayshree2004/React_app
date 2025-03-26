import React from "react";

function UserList({ users, deleteUser }) {
    return (
        <div>
            <h2>Members Added</h2>
            {users.length > 0 ? (
                <ul>
                    {users.map((user, index) => (
                        <li key={index}>
                            <strong>Name:</strong> {user.name} | <strong>Email:</strong> {user.email}
                            <button onClick={() => deleteUser(index)}>❌ Delete</button>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No members added yet.</p>
            )}
        </div>
    );
}

export default UserList;
