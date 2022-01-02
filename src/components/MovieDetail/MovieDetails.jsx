import React from 'react';
import {useParams} from "react-router-dom";

const MovieDetails = () => {
    const {imdbID} = useParams()
    return (
        <div>
            Movie Details
            <p>{imdbID}</p>
        </div>
    );
};

export default MovieDetails;