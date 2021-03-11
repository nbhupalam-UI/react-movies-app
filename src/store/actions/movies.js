import * as actionTypes from "./actionTypes";

export const deleteMovie = (index) => (dispatch) => {
  dispatch({
    type: actionTypes.DELETE_MOVIE,
    index,
  });
};

export const addMovie = () => (dispatch) => {
  dispatch({
    type: actionTypes.ADD_MOVIE,
  });
};

export const searchMovies = () => (dispatch) => {
  dispatch({
    type: actionTypes.SEARCH_MOVIES,
  });
};

export const updateMovie = (title, movie) => (dispatch) => {
  dispatch({
    type: actionTypes.UPDATE_MOVIE,
    title,
    movie,
  });
};
