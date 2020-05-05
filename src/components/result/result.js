import React from "react";


function SearchResults(props) {
    return (
        <ul className="list-group search-results">
            {props.results.map(result => (
                <li key={result.id} className="list-group-item">
                    {result.firstname}
                </li>
            ))}
        </ul>
    );
}

export default SearchResults;
