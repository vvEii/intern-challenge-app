import React from 'react';
import { MovieItem } from './MovieItem';

type Movie = {
  title: string;
  year: string;
  imdbID: string;
};

type Props = {
  nominationList: Movie[];
};

export const NominationList = (props: Props): React.ReactElement => {
  return (
    <ul>
      {props.nominationList.length ? (
        props.nominationList.map((movie, index) => (
          <div key={index}>
            <MovieItem title={movie.title} year={movie.year} imdbID={movie.imdbID} />
            <button>Remove</button>
          </div>
        ))
      ) : (
        <></>
      )}
    </ul>
  );
};
