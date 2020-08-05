
import {PopularMoviesPayload} from './PopularMoviesPayload';
import {MovieSearchResponse} from '../MovieSchema';

export interface PopularMoviesState {
  searchResults?: MovieSearchResponse;
  payload: PopularMoviesPayload;
  isSearchInProgress: boolean;
}
