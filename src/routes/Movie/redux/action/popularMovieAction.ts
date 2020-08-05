import {MovieSearchResponse} from '../../MovieSchema';
import {PopularMoviesPayload} from '../../PopularMovies/PopularMoviesPayload';

const popularMoviesActionType = 'Movie/popularMovies';

export function popularMovies(payload: PopularMoviesPayload) {
  return {
    type: popularMoviesActionType,
    payload
  } as const;
}

export function fetchPopularMovie() {
  return {
    type: popularMoviesActionType,
    payload: {page: 1}
  } as const;
}

popularMovies.toString = () => popularMoviesActionType;

export function popularMoviesResolved(results: MovieSearchResponse) {
  return {type: 'Movie/popularMoviesResolved', payload: results} as const;
}

export function popularMoviesRejected(error: any) {
  return {type: 'Movie/popularMoviesRejected', payload: error} as const;
}
