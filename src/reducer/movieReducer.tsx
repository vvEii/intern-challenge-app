const SET_MOVIE = 'SET_MOVIE';
const SET_NOMINATION = 'SET_NOMINATION';
const DELETE_NOMINATION = 'DELETE_NOMINATION';
const SET_NOMINATIONLIST = 'SET_NOMINATIONLIST';

type Movie = {
  title: string;
  year: string;
  imdbID: string;
};

type State = {
  movieList: Movie[];
  nominationList: Movie[];
};

type Action =
  | { type: 'SET_MOVIE'; movieList: Movie[] }
  | { type: 'SET_NOMINATION'; newMovie: Movie }
  | { type: 'DELETE_NOMINATION'; deletedMovie: Movie }
  | { type: 'SET_NOMINATIONLIST'; nominationList: Movie[]}

export const movieReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case SET_MOVIE:
      return {
        ...state,
        movieList: action.movieList,
      };
    case SET_NOMINATION:
      return {
        ...state,
        nominationList: [...state.nominationList, action.newMovie],
      };
    case DELETE_NOMINATION:
      return {
        ...state,
        nominationList: state.nominationList.filter((movie) => movie.imdbID !== action.deletedMovie.imdbID),
      };
    case SET_NOMINATIONLIST:
      return {
        ...state,
        nominationList: action.nominationList,
      };
    default:
      throw new Error('Tried to reduce with unsupported action type.');
  }
};
