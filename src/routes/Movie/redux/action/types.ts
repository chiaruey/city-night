import {DynamicActionTypes} from '../../../../redux/DynamicActionTypes';

type SearchMovieTypes = typeof import('./popularMovieAction');

export type SearchMovieAction = DynamicActionTypes<SearchMovieTypes>;
