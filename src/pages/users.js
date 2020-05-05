import React, { useState, useEffect } from "react";
import { getUsers, getUserByName } from "../util/getUsers"

function Users() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        loadusers();
    }, []);

    function loadusers(key) {
        switch (key) {
            case key === "all":
                getUsers();
                break;

            case key === "name":
                getUserByName();
                break;

            default:
                console.log("error")
        }
    }

    return ();
};

export default Users;
