import * as actionTypes from "../actions/actionTypes";
import { updatedObject } from "../../shared/utility";

const data = require("../../movies.json");
const genereObj = {};
const moviesByYearObj = {};
data.forEach((f) => {
  if (f.Major_Genre) {
    genereObj[f.Major_Genre] = (genereObj[f.Major_Genre] || 0) + 1;
  }
  const year = new Date(f.Release_Date).getFullYear();
  moviesByYearObj[year] = (moviesByYearObj[year] || 0) + 1;
});

const initialState = {
  data,
  errorMessage: "",
  moviesByGenere: genereObj,
  moviesByYear: moviesByYearObj,
};

const deleteMovie = (state, action) => {
  const updatedMovies = state.data.filter((f, index) => index !== action.index);
  const updatedState = {
    data: updatedMovies,
  };
  return updatedObject(state, updatedState);
};

const addMovie = (state) => {
  const newMovie = {
    Title: `Movie Title ${state.data.length}`,
    Release_Date: "Jan 10 2021",
  };
  const updatedState = {
    ...state,
    data: [newMovie, ...state.data],
  };
  return updatedObject(state, updatedState);
};

const filterMovies = (state, action) => {
  const filteredMovies = state.data.filter((f) => f.title === action.title);
  const updatedState = {
    data: filteredMovies,
  };
  return updatedObject(state, updatedState);
};

const updateMovie = (state, action) => {
  const filteredMovies = state.data.filter((f) => f.title === action.title);
  let updatedState = {};
  if (filteredMovies.length > 1) {
    updatedState = updatedObject(state, {
      errorMessage: "Title is not unique",
    });
  } else {
    const index = state.data.findIndex((f) => f.title === action.title);
    const updatedMoviesList = [...state.data];
    updatedMoviesList[index] = action.movie;
    updatedState = {
      errorMessage: "",
      data: updatedMoviesList,
    };
  }
  return updatedObject(state, updatedState);
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.DELETE_MOVIE:
      return deleteMovie(state, action);
    case actionTypes.ADD_MOVIE:
      return addMovie(state, action);
    case actionTypes.SEARCH_MOVIES:
      return filterMovies(state, action);
    case actionTypes.UPDATE_MOVIE:
      return updateMovie(state, action);
    default:
      return state;
  }
};

export default reducer;
