import {useDispatch} from 'react-redux';

import {useTypedSelector} from '../../../common/hooks/useTypedSelector';

import {getMovieDetail} from '../redux/action/movieDetailAction';
import {MovieDetailPayload} from './MovieDetailPayload';

const useMovieDetailState = () => {

  const fetchMovieDetail = (payload: MovieDetailPayload) => {
    console.log('fetchMovieDetail is called !');
    const dispatch = useDispatch();
    dispatch(getMovieDetail(payload));
  };

  const movieDetailType = useTypedSelector((state) => state.movieDetailRoute);
  return {
    ...movieDetailType,
    fetchMovieDetail,
    result: movieDetailType.searchResults,
    isInProgress: movieDetailType.isSearchInProgress,
  };
};

export {useMovieDetailState};
