import { actions } from 'constants/ActionsTypes'

import _ from 'lodash'

import { all, call, put, takeLatest } from 'redux-saga/effects'
import { List } from 'immutable'

import { getAll as getAllAPI } from './api'

import { getAll } from './actions'

import { getAction } from 'utils/actions'

function* getAllRequested() {
    const categories = yield call(getAllAPI)
    if (_.isUndefined(categories)) {
        yield put(getAll(List()))
    } else {
        yield put(getAll(categories))
    }
}

function* watchRequestGetAll() {
    yield takeLatest(getAction(actions.CATEGORIES_REQUEST_GET_ALL), getAllRequested)
}

function* sagas() {
    yield all([
        watchRequestGetAll()
    ])
}

export { sagas }
