
import {MovieSearchPayload} from './MovieSearchPayload';
import {MovieSearchResponse} from './MovieSearchResponse';

export interface MovieSearchState {
  searchResults?: MovieSearchResponse;
  payload: MovieSearchPayload;
  isSearchInProgress: boolean;
}

