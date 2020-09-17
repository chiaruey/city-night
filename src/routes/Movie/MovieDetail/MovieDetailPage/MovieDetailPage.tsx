import React , { useState } from 'react';
import {useMovieDetailState} from '../useMovieDetailState';
import {useRouter} from 'next/router';
import {MovieDetailResult} from './MovieDetailResult';
import { MovieDetailPayload } from '../MovieDetailPayload';

export const MovieDetailPage: React.FC = () => {
    const {fetchMovieDetail, result } = useMovieDetailState();
    const router = useRouter();
    const { movieId } = router.query;
    console.log('movieId == ' + movieId);
    console.log('routerQuery = ', router.query);
    let movie_id:number = 0;
    if (typeof(movieId) === 'string') {
        movie_id = parseInt(movieId);
    }
    const [loaded, setLoaded] = useState(false);

    if (loaded == false) {
        const payload: MovieDetailPayload = {
          movieId: movie_id
        }
        fetchMovieDetail(payload);
        setLoaded(true);
      }


    return (
            <MovieDetailResult  movieDetailResponse={result}  />
    );

};