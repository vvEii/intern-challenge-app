type Movie = {
  title: string;
  year: string;
  imdbID: string;
};

type State = {
  movieList: Movie[];
  nominationList: Movie[];
};

type Action = { type: 'SET_MOVIE'; movieList: Movie[] } | { type: 'SET_NOMINATION'; newMovie: Movie };

export const movieReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'SET_MOVIE':
      return {
        ...state,
        movieList: action.movieList,
      };
    case 'SET_NOMINATION':
      return {
        ...state,
        nominationList: [...state.nominationList, action.newMovie],
      };
    default:
      throw new Error('Tried to reduce with unsupported action type.');
  }
};
