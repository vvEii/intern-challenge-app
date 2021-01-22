import React from 'react';
import { MovieItem } from './MovieItem';

type Movie = {
  title: string;
  year: string;
  imdbID: string;
};

type Props = {
  nominationList: Movie[];
  dispatch: any;
};

export const NominationList = (props: Props): React.ReactElement => {
  const remove = (movie: Movie): void => {
    if(localStorage.getItem('NOMINATIONLIST')) {
      let nominationList = JSON.parse(localStorage.getItem('NOMINATIONLIST')!)
        .filter((movieLocalStorage:Movie) => movieLocalStorage.imdbID !== movie.imdbID)
      localStorage.setItem('NOMINATIONLIST', JSON.stringify(nominationList));
    }
    props.dispatch({ type: 'DELETE_NOMINATION', deletedMovie: movie });
  };

  return (
    <ul>
      <h4>Nominations</h4>
      {props.nominationList.length === 5 ? <h4>Already got the maximum nomination number of 5.</h4> : <></>}
      {props.nominationList.length ? (
        props.nominationList.map((movie, index) => (
          <div key={index}>
            <MovieItem {...movie} />
            <button onClick={() => remove(movie)}>Remove</button>
          </div>
        ))
      ) : (
        <h4>No nominated movies yet.</h4>
      )}
    </ul>
  );
};
