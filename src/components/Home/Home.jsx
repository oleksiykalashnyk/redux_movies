import React, {useEffect} from 'react';

import {useDispatch} from "react-redux";
import {fetchAsyncMovies, fetchAsyncShows} from "../../redux/movies/movieSlice";

import MovieListing from "../MovieListing/MovieListing";


const Home = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchAsyncMovies());
        dispatch(fetchAsyncShows());
    }, [dispatch]);

    return (
        <div>
            <div className="banner-img"></div>
            <MovieListing/>
        </div>
    );
};

export default Home;