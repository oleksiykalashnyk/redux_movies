import React, {useEffect} from 'react';
import MovieApi from "../../common/apis/movieApi";
import MovieListing from "../MovieListing/MovieListing";
import {useDispatch} from "react-redux";
import {addMovies} from "../../redux/movies/movieSlice";

const Home = () => {
    const dispatch = useDispatch();

    useEffect(() => {

        const movieText = "Potter";

        const fetchMovies = async () => {
            const response = await MovieApi.get(`?apiKey=${process.env.REACT_APP_API_KEY}&s=${movieText}&type=movie`)
                .catch(e => console.log(e));
            dispatch(addMovies(response.data));
        };

        fetchMovies();

    }, []);

    return (
        <div>
            <div className="banner-img"></div>
            <MovieListing/>
        </div>
    );
};

export default Home;