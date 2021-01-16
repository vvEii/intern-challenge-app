import React from 'react';
import TextField from '@material-ui/core/TextField';

interface IProps {
  term: string;
  onChange: (term: string) => void;
}

export const SearchBar = (props: IProps): React.ReactElement => {
  return (
    <TextField id="standard-basic" label="Search Movies" onChange={(event) => props.onChange(event.target.value)} />
  );
};
