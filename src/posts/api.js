import { List } from 'immutable'

import http from 'http'

import { not } from 'utils/functions'
import { handleError, responseWasOK } from 'utils/http'

import Post from './Post'

const POSTS_PATH = '/posts'

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

const save = values => {
    values.timestamp = new Date()
    http.post(POSTS_PATH, values)
        .then(({ data }) => data)
}

export { getAll, save }
