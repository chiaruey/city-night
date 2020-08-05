import axios from 'axios';

import {PopularMoviesPayload} from '../../PopularMovies/PopularMoviesPayload';
import {MovieSearchResponse} from '../../MovieSchema';

export async function getPopularMovies(payload: PopularMoviesPayload) {
  const params: any = {...payload};


  const getPopularMovies = await axios.get<MovieSearchResponse>(`${process.env.movieServiceUrl}/movie-discover/popular`, {
    params
  });

  const popularMovieResonse: MovieSearchResponse = getPopularMovies.data;

  return popularMovieResonse;
}
