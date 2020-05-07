import React, { Component } from "react";
import SearchForm from "../section/SearchForm";
import SearchResults from "../result/result";
import Data from "../../users.json";

class Search extends Component {
    state = {
        search: "",
        results: [],
        filterData: [],
        searchText: '',
        error: ""
    };

    getUsers() {
        //return JSON.parse(Data);


        return Data
    };

    getUserByName(value) {

        const { results } = this.state;

        // 1 people
        return results.filter(result => result.firstname.includes(value))
    }

    // When the component mounts, get a list of all available base breeds and update this.state.breeds
    componentDidMount() {
        const users = this.getUsers()
        this.setState({ results: users })
    }

    handleInputChange = event => {
        this.setState({ searchText: event.target.value });

    };

    handleFormSubmit = event => {
        event.preventDefault();
        const { searchText } = this.state
        const filterData = this.getUserByName(searchText);

        this.setState({ filterData: filterData, search: searchText });

    };
    render() {

        const { search, results, filterData } = this.state;
        console.log({ search, results, filterData, lenght: search.length })
        return (
            <div>

                <h1 className="text-center">Search By Name</h1>

                <SearchForm
                    handleFormSubmit={this.handleFormSubmit}
                    handleInputChange={this.handleInputChange}
                    results={results}
                />
                {
                    search.length > 0 ? <SearchResults results={filterData} />
                        : <SearchResults results={results} />
                }

            </div >
        );
    }
}

export default Search;