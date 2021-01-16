import React from 'react';
import { MovieItem } from './MovieItem';

export const MoviesList = (props: { term: string }): React.ReactElement => {
  const term = props.term ? `for "${props.term}"` : '';
  return (
    <ul>
      {/* <h4>{`Results for "${props.term}"`}</h4> */}
      <h4>Result {term}</h4>
      <MovieItem />
    </ul>
  );
};
