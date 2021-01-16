import React from 'react';
import TextField from '@material-ui/core/TextField';
//import axios from 'axios';

interface IProps {
  term: string;
  onChange: (term: string) => void;
}

// const showResult = (term: string): void => {
//   console.log(term);
//   axios
//     .get(`http://www.omdbapi.com/?s=${term}&apikey=a9adfcbd&type=movie`)
//     .then((res) => console.log(res.data.Search))
//     .catch((err) => console.log(err));
// };

export const SearchBar = (props: IProps): React.ReactElement => {
  return (
    <TextField id="standard-basic" label="Search Movies" onChange={(event) => props.onChange(event.target.value)} />
  );
};
