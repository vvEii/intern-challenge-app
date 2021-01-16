import React from 'react';
import { MovieItem } from './MovieItem';

type Movie = {
  title: string;
  year: string;
  imdbID: string;
};

type Props = {
  term: string;
  movieList: Movie[];
  dispatch: any;
};

export const MoviesList = (props: Props): React.ReactElement => {
  const term = props.term ? `for "${props.term}"` : '';
  const nominate = (movie: Movie) => {
    props.dispatch({ type: 'SET_NOMINATION', newMovie: movie });
  };
  return (
    <ul>
      <h4>Result {term} </h4>
      {props.movieList.length ? (
        props.movieList.map((movie, index) => (
          <div key={index}>
            <MovieItem title={movie.title} year={movie.year} imdbID={movie.imdbID} />
            <button onClick={() => nominate(movie)}>Nominate</button>
          </div>
        ))
      ) : (
        <></>
      )}
    </ul>
  );
};
