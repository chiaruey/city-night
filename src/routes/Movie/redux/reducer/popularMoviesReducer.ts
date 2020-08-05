import {Reducer, AnyAction} from 'redux';
import {PopularMoviesState} from '../../PopularMovies/PopularMoviesState';

const defaultState: PopularMoviesState = {
  payload: {page: 1},
  isSearchInProgress: false
};

export const popularMoviesReducer: Reducer<PopularMoviesState, AnyAction> = (PopularMoviesState = defaultState, action) => {
  console.log('popularMoviesReducer --> action', action);
  console.log('popularMoviesReducer --> PopularMoviesState', PopularMoviesState);

  switch (action.type) {
    case 'Movie/popularMovies':
      return {...PopularMoviesState, filters: action.payload, isSearchInProgress: true};
    case 'Movie/popularMoviesResolved':
      return {...PopularMoviesState, searchResults: action.payload, isSearchInProgress: false};
    case 'Movie/popularMoviesRejected':
      return {...PopularMoviesState, isSearchInProgress: false};
    default:
      return PopularMoviesState;
  }
};
