import axios from 'axios';

import {MovieDetailPayload} from '../../MovieDetail/MovieDetailPayload';
import {MovieDetailResponse} from '../../MovieSchema';

export async function movieDetail(payload: MovieDetailPayload) {
  const params: any = {...payload};


  const movieDetail = await axios.get<MovieDetailResponse>(`${process.env.movieServiceUrl}/movie-detail`, {
    params
  });

  const movieDetailResponse: MovieDetailResponse = movieDetail.data;
  
  console.log('movieDetailService.movieDetail --> movieDetailResponse', movieDetailResponse);

  return movieDetailResponse;
}
