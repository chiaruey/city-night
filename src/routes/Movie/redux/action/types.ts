import {DynamicActionTypes} from '../../../../redux/DynamicActionTypes';

type SearchMovieTypes = typeof import('./searchMovieAction');

export type SearchMovieAction = DynamicActionTypes<SearchMovieTypes>;
