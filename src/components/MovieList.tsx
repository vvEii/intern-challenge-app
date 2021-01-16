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
  nominationList: Movie[];
  dispatch: any;
};

// helper function to check is current movie nominated
const isNominated = (movie: Movie, nominationList: Movie[]): boolean => {
  let isNominated = false;
  nominationList.map((nominatedMovie) => {
    if (nominatedMovie.imdbID === movie.imdbID) {
      isNominated = true;
    }
  });
  return isNominated;
};

export const MoviesList = (props: Props): React.ReactElement => {
  const term = props.term ? `for "${props.term}"` : '';
  const nominate = (movie: Movie): void => {
    props.dispatch({ type: 'SET_NOMINATION', newMovie: movie });
  };

  return (
    <ul>
      <h4>Result {term} </h4>
      {props.movieList.length ? (
        props.movieList.map((movie, index) => (
          <div key={index}>
            <MovieItem {...movie} />
            {isNominated(movie, props.nominationList) ? (
              <button disabled className={'btn-disable'} onClick={() => nominate(movie)}>
                Nominate
              </button>
            ) : (
              <button className={'btn-nominate'} onClick={() => nominate(movie)}>
                Nominate
              </button>
            )}
          </div>
        ))
      ) : (
        <></>
      )}
    </ul>
  );
};
