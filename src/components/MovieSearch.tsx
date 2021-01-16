import React, { Fragment, useState } from 'react';
import { MoviesList } from './MoviesList';
import { SearchBar } from './SearchBar';
import { NominationsList } from './NominationsList';
import './MovieSearch.css';

export const MovieSearch = (): React.ReactElement => {
  const [term, setTerm] = useState('');
  return (
    <Fragment>
      <h2>The Shoppies</h2>
      <main>
        <SearchBar term={term} onChange={(term: string) => setTerm(term)} />
        <div className="list-container">
          <MoviesList term={term} />
          <NominationsList />
        </div>
      </main>
    </Fragment>
  );
};
