import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import MovieApi from "../../common/apis/movieApi";

export const fetchAsyncMovies = createAsyncThunk('movies/fetchAsyncMovies', async (term) => {
    const response = await MovieApi.get(`?apiKey=bad50d68&s=${term}&type=movie`);
    return response.data
})

export const fetchAsyncShows = createAsyncThunk('movies/fetchAsyncShows', async (term) => {
    const response = await MovieApi.get(`?apiKey=bad50d68&s=${term}&type=series`);
    return response.data
})

export const fetchAsyncMovieOrShowDetail = createAsyncThunk('movies/fetchAsyncMovieOrShowDetail', async (id) => {
    const response = await MovieApi.get(`?apiKey=bad50d68&i=${id}&Plot=full`);
    return response.data
})


const initialState = {
    movies: {},
    shows: {},
    selectedMovieOrShow: {}
}

const movieSlice = createSlice({
    name: "movies",
    initialState,
    reducers: {
        addMovies: (state, {payload}) => {
            state.movies = payload;
        },
        removeSelectedMovieOrShow: (state) => {
            state.selectedMovieOrShow = {};
        }
    },
    extraReducers: {
        [fetchAsyncMovies.pending]: () => {
            console.log('pending')
        },
        [fetchAsyncMovies.fulfilled]: (state, {payload}) => {
            return {...state, movies: payload}
        },
        [fetchAsyncMovies.rejected]: () => {
            console.log('Rejected')
        },
        [fetchAsyncShows.fulfilled]: (state, {payload}) => {
            return {...state, shows: payload}
        },
        [fetchAsyncMovieOrShowDetail.fulfilled]: (state, {payload}) => {
            return {...state, selectedMovieOrShow: payload}
        },
    }
})

export const {addMovies, removeSelectedMovieOrShow} = movieSlice.actions;

export const getAllMovies = (state) => state.movies.movies;
export const getAllShows = (state) => state.movies.shows;
export const getSelectedMovieOrShow = (state) => state.movies.selectedMovieOrShow;


export default movieSlice.reducer;