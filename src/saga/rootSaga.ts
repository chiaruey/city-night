import {fork} from 'redux-saga/effects';

import {searchMovieFlow} from '../routes/Movie/redux/saga/searchMovieSaga';

export function* root() {
    yield fork(searchMovieFlow);

}
