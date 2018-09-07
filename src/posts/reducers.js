import _ from 'lodash'

import { List, Map } from 'immutable'

import { handleActions } from 'redux-actions'

import { edit, getAll, getAllByCategory, remove, requestEdit, requestGetAll, requestRemove } from './actions'

import { not } from 'utils/functions'

import { store } from './store'

const reducers = handleActions({
    [edit]: (state, { payload }) => state.merge({ loading: false, post: payload }),
    [getAll]: (state, { payload }) => state.merge({ list: payload, loading: false, post: Map() }),
    [getAllByCategory]: (state, { payload }) => state.merge({ list: payload, loading: false, post: Map() }),
    [remove]: (state, { payload }) => {
        const { list } = state
        let newList = List(list)
        const removeIndex = newList.findIndex(post => post.id === payload.get('id'))
        if (not(_.isUndefined(removeIndex))) {
            newList = newList.delete(removeIndex)
        }
        return state.merge({ list: newList, loading: false })
    },
    [requestEdit]: state => state.set('loading', true),
    [requestGetAll]: state => state.set('loading', true),
    [requestRemove]: state => state.set('loading', true)
}, store)

export { reducers }
