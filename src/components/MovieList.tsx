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
};

export const MoviesList = (props: Props): React.ReactElement => {
  const term = props.term ? `for "${props.term}"` : '';
  return (
    <ul>
      <h4>Result {term} </h4>
      {props.movieList ? (
        props.movieList.map((movie, index) => (
          <MovieItem key={index} title={movie.title} year={movie.year} imdbID={movie.imdbID} />
        ))
      ) : (
        <></>
      )}
    </ul>
  );
};
