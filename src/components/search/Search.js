import React, { Component } from "react";
import SearchForm from "../section/SearchForm";
import SearchResults from "../result/result";
import Data from "../../users.json";

class Search extends Component {
    state = {
        search: "",
        results: [],
        error: ""
    };

    getUsers() {
        return JSON.parse(Data);
    };

    getUserByName(props) {
        return Data.filter(props.search)
    }

    // When the component mounts, get a list of all available base breeds and update this.state.breeds
    componentDidMount() {
        this.getUsers()
            .then(res => this.setState({ results: res }))
            .catch(err => console.log(err));
    }

    handleInputChange = event => {
        this.setState({ search: event.target.value });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        this.getUserByName(this.state.search)
            .then(res => {
                if (res.data.status === "error") {
                    throw new Error(res.data.message);
                }
                this.setState({ results: res.data.message, error: "" });
            })
            .catch(err => this.setState({ error: err.message }));
    };
    render() {
        return (
            <div>

                <h1 className="text-center">Search By Breed!</h1>

                <SearchForm
                    handleFormSubmit={this.handleFormSubmit}
                    handleInputChange={this.handleInputChange}
                    results={this.state.results}
                />
                <SearchResults results={this.state.results} />

            </div>
        );
    }
}

export default Search;