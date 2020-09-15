import {useDispatch} from 'react-redux';

import {useTypedSelector} from '../../../common/hooks/useTypedSelector';

import {movieDetail} from '../redux/action/movieDetailAction';
import {MovieDetailPayload} from './MovieDetailPayload';

const useMovieDetailState = () => {
  const dispatch = useDispatch();

  const fetchMovieDetail = (payload: MovieDetailPayload) => {
    dispatch(movieDetail(payload));
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
