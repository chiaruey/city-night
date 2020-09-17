import { takeEvery, put, call } from 'redux-saga/effects';

import {
    getMovieDetail as movieDetailActionCreator,
    movieDetailResolved,
    movieDetailRejected
} from '../action/movieDetailAction';
import { MovieDetailResponse } from '../../MovieSchema';

import { invokeMovieDetail } from './movieDetailService';

export function* movieDetailFlow() {
    yield takeEvery(movieDetailActionCreator, function* movieDetailActionCreatorFn(action) {
        try {
            console.log('movieDetailSaga.ts --> action = ', action);

            const args = { ...action.payload };
            const movieDetailResponse: MovieDetailResponse = yield call(invokeMovieDetail, args);

            yield put(movieDetailResolved(movieDetailResponse));
        } catch (e) {
            yield put(movieDetailRejected(e));
        }
    });
}
