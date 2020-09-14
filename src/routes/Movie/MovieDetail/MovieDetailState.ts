import {MovieDetailPayload} from './MovieDetailPayload';
import {MovieDetailResponse} from '../MovieSchema';

export interface MovieDetailState {
  searchResults?: MovieDetailResponse;
  payload: MovieDetailPayload;
  isSearchInProgress: boolean;
}

