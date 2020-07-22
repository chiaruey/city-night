import {Reducer, AnyAction} from 'redux';

import {SearchMovieAction} from '../action/types';
import {MovieSearchState} from '../../MovieSearch/MovieSearchState';

const defaultSearchState: MovieSearchState = {
  payload: {query: ""},
  isSearchInProgress: false
};

export const searchMovieReducer: Reducer<MovieSearchState, AnyAction> = (movieSearchState = defaultSearchState, action) => {
  console.log('searchMovieReducer --> action', action);
  console.log('searchMovieReducer --> movieSearchState', movieSearchState);

  switch (action.type) {
    case 'Movie/searchMovie':
      return {...movieSearchState, filters: action.payload, isSearchInProgress: true};
    case 'Movie/searchMovieResolved':
      return {...movieSearchState, searchResults: action.payload, isSearchInProgress: false};
    case 'Movie/searchMovieRejected':
      return {...movieSearchState, isSearchInProgress: false};
    default:
      return movieSearchState;
  }
};
