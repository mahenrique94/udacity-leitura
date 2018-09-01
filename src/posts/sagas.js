import { actions } from 'constants/ActionsTypes'

import _ from 'lodash'

import { all, call, put, takeLatest } from 'redux-saga/effects'
import { List } from 'immutable'

import { getAll as getAllAPI } from './api'

import { getAll } from './actions'

function* getAllRequested() {
    const posts = yield call(getAllAPI)
    if (_.isUndefined(posts)) {
        yield put(getAll(List()))
    } else {
        yield put(getAll(posts))
    }
}

function* watchRequestGetAll() {
    yield takeLatest(actions.POSTS_REQUEST_GET_ALL, getAllRequested)
}

function* sagas() {
    yield all([
        watchRequestGetAll()
    ])
}

export { sagas }
