import React from 'react';

interface Props {
  title: string;
  year: string;
  imdbID: string;
}

export const MovieItem = (props: Props): React.ReactElement => {
  return (
    <li>
      <p>Movie Title: {props.title}</p>
      <p>Year: {props.year}</p>
      <p>IMDbID: {props.imdbID}</p>
    </li>
  );
};
