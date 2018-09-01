import { actions } from 'constants/ActionsTypes'

import { all, call, put, takeLatest } from 'redux-saga/effects'

import { list } from './api'

import { getAll } from './actions'

function* listRequested() {
    const posts = yield call(list)
    yield put(getAll(posts))
}

function* watchRequestList() {
    yield takeLatest(actions.POSTS_REQUEST_LIST, listRequested)
}

function* sagas() {
    yield all([
        watchRequestList()
    ])
}

export { sagas }
