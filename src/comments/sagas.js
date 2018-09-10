import { actions } from 'constants/ActionsTypes'

import _ from 'lodash'

import { all, call, put, takeLatest } from 'redux-saga/effects'
import { List } from 'immutable'

import {
    edit as editAPI,
    getAll as getAllAPI,
    remove as removeAPI,
    save as saveAPI,
    vote as voteAPI
} from './api'

import { edit, getAll, remove, save, vote } from './actions'
import { newComment, removeComment } from '@/posts/actions'

import { getAction } from 'utils/actions'

function* editRequested({ payload }) {
    const comment = yield call(editAPI, payload)
    yield put(edit(comment))
}

function* getAllRequested({ payload }) {
    const comments = yield call(getAllAPI, payload)
    if (_.isUndefined(comments)) {
        yield put(getAll(List()))
    } else {
        yield put(getAll(comments))
    }
}

function* removeRequested({ payload }) {
    const commentRemoved = yield call(removeAPI, payload)
    yield put(remove(commentRemoved))
    yield put(removeComment())
}

function* saveRequested({ payload }) {
    const commentCreated = yield call(saveAPI, payload)
    yield put(save(commentCreated))
    yield put(newComment())
}

function* voteRequested({ payload: { id, type } }) {
    const commentVoted = yield call(voteAPI, id, type)
    yield put(vote(commentVoted))
}

function* watchRequestEdit() {
    yield takeLatest(getAction(actions.COMMENTS_REQUEST_EDIT), editRequested)
}

function* watchRequestGetAll() {
    yield takeLatest(getAction(actions.COMMENTS_REQUEST_GET_ALL), getAllRequested)
}

function* watchRequestRemove() {
    yield takeLatest(getAction(actions.COMMENTS_REQUEST_REMOVE), removeRequested)
}

function* watchRequestSave() {
    yield takeLatest(getAction(actions.COMMENTS_REQUEST_SAVE), saveRequested)
}

function* watchRequestVote() {
    yield takeLatest(getAction(actions.COMMENTS_REQUEST_VOTE), voteRequested)
}

function* sagas() {
    yield all([
        watchRequestEdit(),
        watchRequestGetAll(),
        watchRequestRemove(),
        watchRequestSave(),
        watchRequestVote()
    ])
}

export { sagas }
