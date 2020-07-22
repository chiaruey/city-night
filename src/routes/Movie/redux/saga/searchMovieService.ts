import axios from 'axios';

import {MovieSearchPayload} from '../../MovieSearch/MovieSearchPayload';
import {MovieSearchResponse} from '../../MovieSearch/MovieSearchResponse';

export async function searchMovie(payload: MovieSearchPayload) {
  const params: any = {...payload};

  const headers = {
    'Access-Control-Allow-Origin': '*'
  };

  const movieSearch = await axios.get<MovieSearchResponse>(`${process.env.movieServiceUrl}/movie-search`, {
    headers, params
  });

  const movieSearchResponse: MovieSearchResponse = movieSearch.data;

  console.log('searchMovieService.searchMovie --> movieSearchResponse', movieSearchResponse);

  return movieSearchResponse;
}
