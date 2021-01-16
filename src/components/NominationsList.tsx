import React from 'react';
import { MovieItem } from './MovieItem';

export const NominationsList = (): React.ReactElement => {
  return (
    <ul>
      <MovieItem />
      <button>Remove</button>
    </ul>
  );
};
