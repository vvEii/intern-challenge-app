import React, { Fragment, useState, useReducer, useEffect } from 'react';
import axios from 'axios';
import { MoviesList } from './MovieList';
import { SearchBar } from './SearchBar';
import { NominationList } from './NominationList';
import { movieReducer } from '../reducer/movieReducer';

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
  const NOMINATIONLIST = 'NOMINATIONLIST';

  // save nomination list when user close the page
  window.onbeforeunload = () => {
    if (state.nominationList.length > 0){
      localStorage.setItem(NOMINATIONLIST, JSON.stringify(state.nominationList));
    }
  }

  window.onload = () => {
    if(localStorage.getItem(NOMINATIONLIST)) {
      const nominationList = JSON.parse(localStorage.getItem(NOMINATIONLIST)!);
      dispatch({type:'SET_NOMINATIONLIST', nominationList});
    }
  }

  useEffect(() => {
    //https://cors-anywhere.herokuapp.com/
    dispatch({ type: 'SET_MOVIE', movieList: [] });
    axios
      .get(`https://cors-anywhere.herokuapp.com/http://www.omdbapi.com/?s=${term}&apikey=a9adfcbd&page=1&type=movie`)
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
      <a href="https://github.com/vvEii/intern-challenge-app" target="_blank">GitHub Repo Link</a>
      <main>
        <SearchBar term={term} onChange={(term: string) => setTerm(term)} />
        <div className="list-container">
          <MoviesList
            term={term}
            movieList={state.movieList}
            nominationList={state.nominationList}
            dispatch={dispatch}
          />
          <NominationList nominationList={state.nominationList} dispatch={dispatch} />
        </div>
      </main>
    </Fragment>
  );
};
