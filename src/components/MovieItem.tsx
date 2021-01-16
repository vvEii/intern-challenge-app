import React from 'react';

interface Props {
  title: string;
  year: string;
  imdbID: string;
}

export const MovieItem = (props: Props): React.ReactElement => {
  return (
    <li>
      <p>{props.title}</p>
      <p>{props.year}</p>
      <p>{props.imdbID}</p>
    </li>
  );
};
