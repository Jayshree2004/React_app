import React, { useState } from "react";
import Header from "./Components/AddUser";

function App() {
    const [users, setUsers] = useState([]);

    const addUser = (user) => {
        setUsers([...users, user]);
    };

    return (
        <div>
            <Header addUser={addUser} />
=            
        </div>
    );
}

export default App;
