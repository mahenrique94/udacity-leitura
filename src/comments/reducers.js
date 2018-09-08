import _ from 'lodash'

import { List, Map } from 'immutable'

import { handleActions } from 'redux-actions'

import {
    edit,
    getAll,
    remove,
    requestEdit,
    requestGetAll,
    requestRemove,
    vote
} from './actions'

import { not } from 'utils/functions'

import { store } from './store'

import Comment from './Comment'

const reducers = handleActions({
    [edit]: (state, { payload }) => state.merge({ comment: payload, loading: false }),
    [getAll]: (state, { payload }) => state.merge({ comment: Map(), list: payload, loading: false }),
    [remove]: (state, { payload }) => {
        const { list } = state
        let newList = List(list)
        const removeIndex = newList.findIndex(comment => comment.id === payload.get('id'))
        if (not(_.isUndefined(removeIndex))) {
            newList = newList.delete(removeIndex)
        }
        return state.merge({ list: newList, loading: false })
    },
    [requestEdit]: state => state.set('loading', true),
    [requestGetAll]: state => state.set('loading', true),
    [requestRemove]: state => state.set('loading', true),
    [vote]: (state, { payload }) => {
        const { list } = state
        let newList = List(list)
        const updateIndex = newList.findIndex(item => item.id === payload.get('id'))
        if (not(_.isUndefined(updateIndex))) {
            newList = newList.set(updateIndex, new Comment(payload.toJS()))
        }
        return state.merge({ list: newList, loading: false })
    }
}, store)

export { reducers }
