import React from "react";
import Data from "../users.json";

export default {
    getUsers: function () {
        Data.map((users, index) => {
            return (users);
        })
    },

    getUserByName: function (props) {
        return Data.filter(props.name)
    }
}