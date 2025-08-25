import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


export default function Header(props) {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">{props.title}</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about" role="button" >
                                    About
                                </Link>
                                <ul className="dropdown-menu">

                                </ul>
                            </li>

                        </ul>
                        {props.searchBar ? (
                            <form className="d-flex" role="search">
                                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                <button className="btn btn-outline-success" type="submit">Search</button>
                            </form>
                        ) : ""}
                    </div>
                </div>
            </nav>

        </div>
    )
}

Header.defautProps ={

    title: "Your Title Here",
    searchBar: true
}


Header.prototype = {
    title:PropTypes.string.isRequired,
    searchBar: PropTypes.bool.isRequired
}

// in place of anchor tag we use link tag from react-router-dom
// we use to= in place of href in link tag
// we use exact keyword to avoid partial matching of url
// we use className in place of class in react
// we use {} to write js code inside jsx
// we use {} to write js expression inside jsx
// we cannot use if-else condition inside jsx but we can use ternary operator
// we can use && operator to write if condition inside jsx
// we cannot use for loop inside jsx but we can use map function
// we use class component when we want to use state and lifecycle methods
// we use functional component when we don't want to use state and lifecycle methods
// but with the help of hooks we can use state and lifecycle methods in functional component also
// we use useState hook to use state in functional component
// we use useEffect hook to use lifecycle methods in functional component
// we use useContext hook to use context in functional component
// we use useReducer hook to use reducer in functional component
// we use useRef hook to use ref in functional component
// we use useMemo hook to use memoization in functional component       