import {fork} from 'redux-saga/effects';

import {searchMovieFlow} from '../routes/Movie/redux/saga/searchMovieSaga';
import {popularMoviesFlow} from '../routes/Movie/redux/saga/popularMoviesSaga';
import {movieDetailFlow} from '../routes/Movie/redux/saga/movieDetailSaga';

export function* root() {
    yield fork(searchMovieFlow);
    yield fork(popularMoviesFlow);
    yield fork(movieDetailFlow);

}
