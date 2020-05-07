import React from "react";

const divStyle = {
    textAlign: "left",
    background: "grey"
}

function SearchResults(props) {
    return (
        <ul className="list-group search-results">
            {props.results.map(result => (
                <div style={divStyle}>
                    <li key={result.id} className="list-group-item">
                        first Name: {result.firstname}
                    </li>
                    <li key={result.id} className="list-group-item">
                        Last Name: {result.lastname}
                    </li>
                    <li key={result.id} className="list-group-item">
                        Age: {result.age}
                    </li>
                    <li key={result.id} className="list-group-item">
                        Hobby: {result.hobby}
                    </li>
                    <br />
                </div>

            ))}
        </ul>
    );
}

export default SearchResults;
