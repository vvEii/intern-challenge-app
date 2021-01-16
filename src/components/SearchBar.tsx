import React from 'react';
import TextField from '@material-ui/core/TextField';

export const SearchBar = (): React.ReactElement => {
  return (
    <TextField id="standard-basic" label="Search Exercises" onChange={(event) => console.log(event.target.value)} />
  );
};
