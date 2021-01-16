import React, { Fragment, useState, useEffect } from 'react';
import axios from 'axios';
import { MoviesList } from './MoviesList';
import { SearchBar } from './SearchBar';
import { NominationsList } from './NominationsList';
import './MovieSearch.css';

export const MovieSearch = (): React.ReactElement => {
  const [term, setTerm] = useState('');
  useEffect(() => {
    axios
      .get(`http://www.omdbapi.com/?s=${term}&apikey=a9adfcbd&page=1&type=movie`)
      .then((res) => console.log(res.data.Search))
      .catch((err) => console.log(err));
  }, [term]);

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
