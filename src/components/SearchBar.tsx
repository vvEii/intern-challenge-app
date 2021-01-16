import React from 'react';
import TextField from '@material-ui/core/TextField';
import axios from 'axios';

const showResult = (title: string): void => {
  console.log(title);
  axios
    .get(`http://www.omdbapi.com/?s=${title}&apikey=a9adfcbd`)
    .then((res) => console.log(res.data.Search))
    .catch((err) => console.log(err));
};

export const SearchBar = (): React.ReactElement => {
  return <TextField id="standard-basic" label="Search Movies" onChange={(event) => showResult(event.target.value)} />;
};
