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
    props.dispatch({ type: 'DELETE_NOMINATION', deletedMovie: movie });
  };

  return (
    <ul>
      <h4>Nominations</h4>
      {props.nominationList.length ? (
        props.nominationList.map((movie, index) => (
          <div key={index}>
            <MovieItem title={movie.title} year={movie.year} imdbID={movie.imdbID} />
            <button onClick={() => remove(movie)}>Remove</button>
          </div>
        ))
      ) : (
        <></>
      )}
    </ul>
  );
};
