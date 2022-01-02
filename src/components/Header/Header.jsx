import React, {useState} from 'react';
import {Link, useNavigate} from "react-router-dom";

import user from '../../images/user.png'
import "./Header.scss";
import {useDispatch} from "react-redux";
import {fetchAsyncMovies, fetchAsyncShows} from "../../redux/movies/movieSlice";

const Header = () => {

    const dispatch = useDispatch();
    let navigate = useNavigate();

    const [term, setTerm] = useState("");

    const submitHandler = (e) => {
        e.preventDefault();
        if (term === "") {
            return alert("Please enter search term!")
        }
        dispatch(fetchAsyncShows(term));
        dispatch(fetchAsyncMovies(term));
        setTerm("");
    };

    return (
        <div className="header">
            <div className="logo">
                <Link to="/">
                    Movie App
                </Link>
            </div>

            <div className="search-bar">
                <form onSubmit={submitHandler}>
                    <input
                        type="text"
                        value={term}
                        placeholder="Search Movies or Shows"
                        onChange={(e) => setTerm(e.target.value)}
                    />
                    <button type="submit">
                        <i className="fa fa-search"></i>
                    </button>
                </form>
            </div>
            <div className="user-image">
                <img src={user} alt="user"/>
            </div>
        </div>
    );
};

export default Header;