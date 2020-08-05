
import {MovieSearchPayload} from './MovieSearchPayload';
import {MovieSearchResponse} from '../MovieSchema';

export interface MovieSearchState {
  searchResults?: MovieSearchResponse;
  payload: MovieSearchPayload;
  isSearchInProgress: boolean;
}

