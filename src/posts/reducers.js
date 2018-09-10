import _ from 'lodash'

import { List, Map } from 'immutable'

import { handleActions } from 'redux-actions'

import {
    edit,
    getAll,
    getAllByCategory,
    newComment,
    remove,
    removeComment,
    requestEdit,
    requestGetAll,
    requestRemove,
    vote
} from './actions'

import { not } from 'utils/functions'

import { store } from './store'

import Post from './Post'

const reducers = handleActions({
    [edit]: (state, { payload }) => state.merge({ loading: false, post: payload }),
    [getAll]: (state, { payload }) => state.merge({ list: payload, loading: false, post: Map() }),
    [getAllByCategory]: (state, { payload }) => state.merge({ list: payload, loading: false, post: Map() }),
    [newComment]: state => {
        const { post } = state
        let newPost = Map(post)
        newPost = newPost.set('commentCount', newPost.get('commentCount') + 1)
        return state.set('post', newPost)
    },
    [remove]: (state, { payload }) => {
        const { list } = state
        let newList = List(list)
        const removeIndex = newList.findIndex(post => post.id === payload.get('id'))
        if (not(_.isUndefined(removeIndex))) {
            newList = newList.delete(removeIndex)
        }
        return state.merge({ list: newList, loading: false })
    },
    [removeComment]: state => {
        const { post } = state
        let newPost = Map(post)
        newPost = newPost.set('commentCount', newPost.get('commentCount') - 1)
        return state.set('post', newPost)
    },
    [requestEdit]: state => state.set('loading', true),
    [requestGetAll]: state => state.set('loading', true),
    [requestRemove]: state => state.set('loading', true),
    [vote]: (state, { payload }) => {
        const { list, post } = state
        let newList = List(list)
        let newPost = Map(post)
        const updateIndex = newList.findIndex(item => item.id === payload.get('id'))
        if (not(_.isUndefined(updateIndex))) {
            newList = newList.set(updateIndex, new Post(payload.toJS()))
        }
        if (not(_.isEmpty(newPost))) {
            if (newPost.get('id') === payload.get('id')) {
                newPost = newPost.set('voteScore', payload.get('voteScore'))
            }
        }
        return state.merge({ list: newList, loading: false, post: newPost })
    }
}, store)

export { reducers }
