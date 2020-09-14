import { takeEvery, put, call } from 'redux-saga/effects';

import {
    movieDetail as movieDetailActionCreator,
    movieDetailResolved,
    movieDetailRejected
} from '../action/movieDetailAction';
import { MovieDetailResponse } from '../../MovieSchema';

import { movieDetail } from './movieDetailService';

export function* movieDetailFlow() {
    yield takeEvery(movieDetailActionCreator, function* movieDetailActionCreatorFn(action) {
        try {
            console.log('movieDetailSaga.ts --> action = ', action);

            const args = { ...action.payload };
            const movieDetailResponse: MovieDetailResponse = yield call(movieDetail, args);

            yield put(movieDetailResolved(movieDetailResponse));
        } catch (e) {
            yield put(movieDetailRejected(e));
        }
    });
}
