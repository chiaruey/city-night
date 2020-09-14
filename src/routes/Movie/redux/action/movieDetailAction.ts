import {MovieDetailResponse} from '../../MovieSchema';
import {MovieDetailPayload} from '../../MovieDetail/MovieDetailPayload';

const movieDetailActionType = 'Movie/movieDetail';

export function movieDetail(payload: MovieDetailPayload) {
  return {
    type: movieDetailActionType,
    payload
  } as const;
}

movieDetail.toString = () => movieDetailActionType;

export function movieDetailResolved(results: MovieDetailResponse) {
  return {type: 'Movie/movieDetailResolved', payload: results} as const;
}

export function movieDetailRejected(error: any) {
  return {type: 'Movie/movieDetailRejected', payload: error} as const;
}
