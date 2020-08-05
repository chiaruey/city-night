import { takeEvery, put, call } from 'redux-saga/effects';

import {
    searchMovie as searchMovieActionCreator,
    searchMovieResolved,
    searchMovieRejected
} from '../action/searchMovieAction';
import { MovieSearchResponse } from '../../MovieSchema';

import { searchMovie } from './searchMovieService';

export function* searchMovieFlow() {
    yield takeEvery(searchMovieActionCreator, function* searchMovieActionCreatorFn(action) {
        try {
            console.log('searchMovieSaga.ts --> action = ', action);

            const args = { ...action.payload };
            const movieSearchResponse: MovieSearchResponse = yield call(searchMovie, args);

            yield put(searchMovieResolved(movieSearchResponse));
        } catch (e) {
            yield put(searchMovieRejected(e));
        }
    });
}
