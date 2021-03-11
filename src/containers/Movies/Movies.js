import React, { Component } from "react";
import { connect } from "react-redux";

import {
  deleteMovie,
  addMovie,
  searchMovies,
} from "../../store/actions/movies";

import Movie from "../../components/Movie/Movie";
import "./Movies.css";

class Movies extends Component {
  onDeleteMovie = (index) => {
    this.props.deleteMovie(index);
  };
  addMovieHandler = () => {
    console.log("ada");
    this.props.addMovie();
  };
  render() {
    const { moviesList, moviesByGenere, moviesByYear } = this.props;
    const renderMovies = moviesList.map((m, index) => {
      return (
        <Movie
          key={index}
          {...m}
          index={index}
          deleteHandler={this.onDeleteMovie}
        />
      );
    });
    const renderMoviesByGenere = Object.keys(moviesByGenere).map((m) => {
      return (
        <p key={m}>
          {m}: {moviesByGenere[m]}
        </p>
      );
    });
    const renderMoviesByYear = Object.keys(moviesByYear).map((m) => {
      return (
        <p key={m}>
          {m}: {moviesByYear[m]}
        </p>
      );
    });
    return (
      <div className="movies">
        <div className="movies-list-header">
          <h1 className="movies-list-title">Movies List</h1>
          <button className="movies-add" onClick={this.addMovieHandler}>
            Add Movie
          </button>
        </div>
        <div className="movies-list">{renderMovies}</div>
        <div className="movies-by">
          <div className="movies-by-data">
            <h2>Movies By Genere</h2>
            <div>{renderMoviesByGenere}</div>
          </div>
          <div className="movies-by-data">
            <h2>Movies By Year</h2>
            <div>{renderMoviesByYear}</div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { data: moviesList, moviesByGenere, moviesByYear } = state.movies;
  return {
    moviesList,
    moviesByGenere,
    moviesByYear,
  };
};

export default connect(
  mapStateToProps,
  {
    deleteMovie,
    addMovie,
    searchMovies,
  }
)(Movies);
