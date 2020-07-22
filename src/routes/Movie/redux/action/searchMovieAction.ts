import {MovieSearchResponse} from '../../MovieSearch/MovieSearchResponse';
import {MovieSearchPayload} from '../../MovieSearch/MovieSearchPayload';

const searchMovieActionType = 'Movie/searchMovie';

export function searchMovie(payload: MovieSearchPayload) {
  return {
    type: searchMovieActionType,
    payload
  } as const;
}

searchMovie.toString = () => searchMovieActionType;

export function searchMovieResolved(results: MovieSearchResponse) {
  return {type: 'Movie/searchMovieResolved', payload: results} as const;
}

export function searchMovieRejected(error: any) {
  return {type: 'Movie/searchMovieRejected', payload: error} as const;
}
