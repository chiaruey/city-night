import {Reducer, AnyAction} from 'redux';
import {MovieDetailState} from '../../MovieDetail/MovieDetailState';

const defaultState: MovieDetailState = {
  payload: {movieId: 0},
  isSearchInProgress: false
};

export const movieDetailReducer: Reducer<MovieDetailState, AnyAction> = (movieDetailState = defaultState, action) => {
  console.log('movieDetailReducer --> action', action);
  console.log('movieDetailReducer --> movieDetailState', movieDetailState);

  switch (action.type) {
    case 'Movie/movieDetail':
      return {...movieDetailState, filters: action.payload, isSearchInProgress: true};
    case 'Movie/movieDetailResolved':
      return {...movieDetailState, searchResults: action.payload, isSearchInProgress: false};
    case 'Movie/movieDetailRejected':
      return {...movieDetailState, isSearchInProgress: false};
    default:
      return movieDetailState;
  }
};
