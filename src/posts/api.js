import uuid from 'uuid'

import { List, Map } from 'immutable'

import http from 'http'

import { not } from 'utils/functions'
import { handleError, responseWasOK } from 'utils/http'

import Post from './Post'

const POSTS_PATH = '/posts'

const edit = id =>
    http.get(`${POSTS_PATH}/${id}`)
        .then(({ data, status }) => {
            if (responseWasOK(status)) {
                return Map(new Post(data))
            }
            return Map()
        })
        .catch(handleError)

const getAll = () =>
    http.get(POSTS_PATH)
        .then(({ data, status }) => {
            if (responseWasOK(status)) {
                let posts = List()
                if (Array.isArray(data)) {
                    data.filter(({ deleted }) => not(deleted)).forEach(item => posts = posts.push(new Post(item)))
                }
                return posts
            }
            return List()
        })
        .catch(handleError)

const getAllByCategory = category =>
    http.get(`${category}/posts`)
        .then(({ data, status }) => {
            if (responseWasOK(status)) {
                let posts = List()
                if (Array.isArray(data)) {
                    data.filter(({ deleted }) => not(deleted)).forEach(item => posts = posts.push(new Post(item)))
                }
                return posts
            }
            return List()
        })
        .catch(handleError)

const remove = id =>
    http.delete(`${POSTS_PATH}/${id}`)
        .then(({ data, status }) => {
            if (responseWasOK(status)) {
                return Map(new Post(data))
            }
            return Map()
        })
        .catch(handleError)

const save = values => {
    const { id } = values
    let method = 'POST'
    let PATH = POSTS_PATH
    values.timestamp = new Date()
    if (id) {
        method = 'PUT'
        PATH = `${PATH}/${id}`
    } else {
        values.id = uuid()
    }
    http({ data: values, method, url: PATH })
        .then(({ data }) => data)
        .catch(handleError)
}

const vote = (id, type) =>
    http.post(`${POSTS_PATH}/${id}`, { option: type })
        .then(({ data, status }) => {
            if (responseWasOK(status)) {
                return Map(new Post(data))
            }
            return Map()
        })
        .catch(handleError)

export { edit, getAll, getAllByCategory, remove, save, vote }
