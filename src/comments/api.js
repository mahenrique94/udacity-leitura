import { List, Map } from 'immutable'

import http from 'http'

import { not } from 'utils/functions'
import { handleError, responseWasOK } from 'utils/http'

import Comment from './Comment'

const COMMENTS_PATH = '/comments'

const edit = id =>
    http.get(`${COMMENTS_PATH}/${id}`)
        .then(({ data, status }) => {
            if (responseWasOK(status)) {
                return Map(new Comment(data))
            }
            return Map()
        })
        .catch(handleError)

const getAll = postId =>
    http.get(`/posts/${postId}${COMMENTS_PATH}`)
        .then(({ data, status }) => {
            if (responseWasOK(status)) {
                let comments = List()
                if (Array.isArray(data)) {
                    data.filter(({ deleted }) => not(deleted)).forEach(item => comments = comments.push(new Comment(item)))
                }
                return comments
            }
            return List()
        })
        .catch(handleError)

const remove = id =>
    http.delete(`${COMMENTS_PATH}/${id}`)
        .then(({ data, status }) => {
            if (responseWasOK(status)) {
                return Map(new Comment(data))
            }
            return Map()
        })
        .catch(handleError)

const save = values => {
    const { id } = values
    let method = 'POST'
    let PATH = COMMENTS_PATH
    values.timestamp = new Date()
    if (id) {
        method = 'PUT'
        PATH = `${PATH}/${id}`
    }
    return http({ data: values, method, url: PATH })
        .then(({ data }) => Map(new Comment(data)))
        .catch(handleError)
}

const vote = (id, type) =>
    http.post(`${COMMENTS_PATH}/${id}`, { option: type })
        .then(({ data, status }) => {
            if (responseWasOK(status)) {
                return Map(new Comment(data))
            }
            return Map()
        })
        .catch(handleError)

export { edit, getAll, remove, save, vote }
