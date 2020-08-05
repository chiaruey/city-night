import {fork} from 'redux-saga/effects';

import {searchMovieFlow} from '../routes/Movie/redux/saga/searchMovieSaga';
import {popularMoviesFlow} from '../routes/Movie/redux/saga/popularMoviesSaga';

export function* root() {
    yield fork(searchMovieFlow);
    yield fork(popularMoviesFlow);

}
