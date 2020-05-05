import React from "react";

// Using the datalist element we can create autofill suggestions based on the props.breeds array
function SearchForm(props) {
    return (
        <form className="search">
            <div className="form-group">
                <label htmlFor="breed">User Name:</label>
                <input
                    value={props.search}
                    onChange={props.handleInputChange}
                    className="form-control"
                    placeholder="Type in a User Name"

                />

                <button type="submit" onClick={props.handleFormSubmit} className="btn btn-success">
                    Search
        </button>
            </div>
        </form>
    );
}

export default SearchForm;
