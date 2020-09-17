import axios from 'axios';

import {MovieDetailPayload} from '../../MovieDetail/MovieDetailPayload';
import {MovieDetailResponse} from '../../MovieSchema';

export async function invokeMovieDetail(payload: MovieDetailPayload) {
  console.log('movieDetailService.movieDetail has been called');
  const params: any = {...payload};


  const movieDetail = await axios.get<MovieDetailResponse>(`${process.env.movieServiceUrl}/movie-detail`, {
    params
  });

  const movieDetailResponse: MovieDetailResponse = movieDetail.data;
  
  console.log('movieDetailService.movieDetail --> movieDetailResponse', movieDetailResponse);

  return movieDetailResponse;
}
