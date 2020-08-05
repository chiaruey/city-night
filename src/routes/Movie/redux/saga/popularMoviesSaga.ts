import { takeEvery, put, call } from 'redux-saga/effects';

import {
    popularMovies as getPopularMoviesActionCreator,
    popularMoviesResolved,
    popularMoviesRejected
} from '../action/popularMovieAction';
import { MovieSearchResponse } from '../../MovieSchema';

import { getPopularMovies } from './popularMoviesService';

export function* popularMoviesFlow() {
    yield takeEvery(getPopularMoviesActionCreator, function* getPopularMoviesActionCreatorFn(action) {
        try {
            console.log('getPopularMoviesSaga.ts --> action = ', action);

            const args = { ...action.payload };
            const popularMovieResonse: MovieSearchResponse = yield call(getPopularMovies, args);

            yield put(popularMoviesResolved(popularMovieResonse));
        } catch (e) {
            yield put(popularMoviesRejected(e));
        }
    });
}
