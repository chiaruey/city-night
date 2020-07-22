import {useDispatch} from 'react-redux';

import {useTypedSelector} from '../../../common/hooks/useTypedSelector';

import {searchMovie} from '../redux/action/searchMovieAction';
import {MovieSearchPayload} from './MovieSearchPayload';

const useMovieSearchState = () => {
  const dispatch = useDispatch();

  const searchForMovie = (payload: MovieSearchPayload) => {
    dispatch(searchMovie(payload));
  };

  const movieSearchType = useTypedSelector((state) => state.movieSearchRoute);
  return {
    ...movieSearchType,
    searchForMovie,
    result: movieSearchType.searchResults,
    isInProgress: movieSearchType.isSearchInProgress,
  };
};

export {useMovieSearchState};
