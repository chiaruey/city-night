import {Reducer, AnyAction} from 'redux';
import {ExplorerState} from '../ExplorerState';
import {searchMovieReducer} from '../../routes/Movie/redux/reducer/searchMovieReducer';
import {popularMoviesReducer} from '../../routes/Movie/redux/reducer/popularMoviesReducer';

export const rootReducer: Reducer<ExplorerState, AnyAction> = (ExplorerState, action) => {
  return {
    movieSearchRoute:  searchMovieReducer(ExplorerState && ExplorerState.movieSearchRoute, action),
    popularMoviesRoute: popularMoviesReducer(ExplorerState && ExplorerState.popularMoviesRoute, action)
   };
}