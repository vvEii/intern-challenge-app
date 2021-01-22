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
  const [url, setUrl] = useState('');
  const [state, dispatch] = useReducer(movieReducer, intialState);
  const NOMINATIONLIST = 'NOMINATIONLIST';

  // save nomination list when user close the page
  window.onbeforeunload = () => {
    if (state.nominationList.length > 0){
      localStorage.setItem(NOMINATIONLIST, JSON.stringify(state.nominationList));
    }
  }

  // fetch movies data by movie id
  const fetchMovieByIDs = (imdbIDs: string[]) => {
    
    const urls = imdbIDs.map(id => {
      return axios.get(`http://www.omdbapi.com/?i=${id}&apikey=a9adfcbd&page=1&type=movie`);
    })
    Promise.all(urls)
    .then(res => {
      const nominationList = res.map(movie => {
        const formattedMovie = {
          title: movie.data.Title,
          year: movie.data.Year,
          imdbID: movie.data.imdbID,
        };
        return formattedMovie;
      })
      dispatch({type: 'SET_NOMINATIONLIST', nominationList});
      window.location.href = window.location.href.split('share=')[0];
    })
    .catch(err => console.log(err))
  }

  // 
  useEffect(() => {
    const url = window.location.href;
    const params = url.split('share=');
    
    if(url.includes('share=') && params[1]) {
      const imdbIDs = params[1].split('-');
      imdbIDs.pop();
      fetchMovieByIDs(imdbIDs);
    }

    if(localStorage.getItem(NOMINATIONLIST)) {
      const nominationList = JSON.parse(localStorage.getItem(NOMINATIONLIST)!);
      dispatch({type:'SET_NOMINATIONLIST', nominationList});
    }
  }, [])

  // generate sharable link when the nominationList changed
  useEffect(() => {
    const domain = window.location.href.split('share=')[0];
      let shareUrl = domain + 'share=';
      state.nominationList.map(movie => {
        shareUrl += movie.imdbID + '-';
      })
      setUrl(shareUrl);
  }, [state.nominationList])

  // fetch movie data by term that users typed in
  useEffect(() => {
    //https://cors-anywhere.herokuapp.com/
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
      <p>The Sharable Link: {url}</p>
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
