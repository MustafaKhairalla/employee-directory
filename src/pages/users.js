import React, { useState, useEffect } from "react";
import { getUsers, getUserByName } from "../util/getUsers"

function Users() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        loadusers();
    }, []);

    function loadusers() {

    }

    return ();
};

export default Users;
