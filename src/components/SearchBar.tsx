import React from 'react';
import TextField from '@material-ui/core/TextField';

type Props = {
  term: string;
  onChange: (term: string) => void;
};

export const SearchBar = (props: Props): React.ReactElement => {
  return (
    <TextField id="standard-basic" label="Search Movies" onChange={(event) => props.onChange(event.target.value)} />
  );
};
