import {Reducer, AnyAction} from 'redux';
import {ExplorerState} from '../ExplorerState';
import {searchMovieReducer} from '../../routes/Movie/redux/reducer/searchMovieReducer';

export const rootReducer: Reducer<ExplorerState, AnyAction> = (ExplorerState, action) => {
  return {
    movieSearchRoute:  searchMovieReducer(ExplorerState && ExplorerState.movieSearchRoute, action)

   };
}