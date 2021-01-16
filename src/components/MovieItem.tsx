import React from 'react';

interface Props {
  title: string;
  year: string;
  imdbID: string;
  key: number;
}

export const MovieItem = (props: Props): React.ReactElement => {
  console.log(props);
  return (
    <li>
      <p>{props.title}</p>
      <p>{props.year}</p>
      <p>{props.imdbID}</p>
    </li>
  );
};
