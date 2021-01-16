import React, { Fragment, useState, useReducer, useEffect } from 'react';
import axios from 'axios';
import { MoviesList } from './MovieList';
import { SearchBar } from './SearchBar';
import { NominationsList } from './NominationList';
import { movieReducer } from '../reducer/movieReducer';
import './MovieSearch.css';

type Movie = {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
};

export const MovieSearch = (): React.ReactElement => {
  const intialState = { movieList: [], nominationList: [] };
  const [term, setTerm] = useState('');
  const [state, dispatch] = useReducer(movieReducer, intialState);

  useEffect(() => {
    dispatch({ type: 'SET_MOVIE', movieList: [] });
    axios
      .get(`http://www.omdbapi.com/?s=${term}&apikey=a9adfcbd&page=1&type=movie`)
      .then((res) => {
        const movieList = res.data.Search.map((movie: Movie) => {
          const formattedMovie = {
            title: movie.Title,
            year: movie.Year,
            imdbID: movie.imdbID,
          };
          return formattedMovie;
        });
        dispatch({ type: 'SET_MOVIE', movieList });
      })
      .catch((err) => console.log(err));
  }, [term]);

  return (
    <Fragment>
      <h2>The Shoppies</h2>
      <main>
        <SearchBar term={term} onChange={(term: string) => setTerm(term)} />
        <div className="list-container">
          <MoviesList term={term} movieList={state.movieList} />
          <NominationsList />
        </div>
      </main>
    </Fragment>
  );
};
