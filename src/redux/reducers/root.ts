import {Reducer, AnyAction} from 'redux';
import {ExplorerState} from '../ExplorerState';
import {searchMovieReducer} from '../../routes/Movie/redux/reducer/searchMovieReducer';
import {popularMoviesReducer} from '../../routes/Movie/redux/reducer/popularMoviesReducer';
import {movieDetailReducer} from '../../routes/Movie/redux/reducer/movieDetailReducer';

export const rootReducer: Reducer<ExplorerState, AnyAction> = (ExplorerState, action) => {
  return {
    movieSearchRoute:  searchMovieReducer(ExplorerState && ExplorerState.movieSearchRoute, action),
    popularMoviesRoute: popularMoviesReducer(ExplorerState && ExplorerState.popularMoviesRoute, action),
    movieDetailRoute: movieDetailReducer(ExplorerState && ExplorerState.movieDetailRoute, action)
   };
}