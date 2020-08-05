import {useDispatch} from 'react-redux';

import {useTypedSelector} from '../../../common/hooks/useTypedSelector';
import {useDispatchEffect} from '../../../common/hooks/useDispatchEffect';

import {popularMovies} from '../redux/action/popularMovieAction';
import {PopularMoviesPayload} from './PopularMoviesPayload';
import {fetchPopularMovie} from '../redux/action/popularMovieAction';

const usePopularMoviesState = () => {
  const dispatch = useDispatch();

  useDispatchEffect(fetchPopularMovie);
  
  const getPopularMovies = (payload: PopularMoviesPayload) => {
    dispatch(popularMovies(payload));
  };

  const popularMoviesType = useTypedSelector((state) => state.popularMoviesRoute);
  return {
    ...popularMoviesType,
    getPopularMovies,
    result: popularMoviesType.searchResults,
    isInProgress: popularMoviesType.isSearchInProgress,
  };
};

export {usePopularMoviesState};
