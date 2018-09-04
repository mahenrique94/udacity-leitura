import { List } from 'immutable'

import http from 'http'

import { handleError, responseWasOK } from 'utils/http'

import Post from './Post'

const getAll = () =>
    http.get('/posts')
        .then(({ data, status }) => {
            if (responseWasOK(status)) {
                let posts = List()
                if (Array.isArray(data)) {
                    data.forEach(item => posts = posts.push(new Post(item)))
                }
                return posts
            }
            return List()
        })
        .catch(handleError)

export { getAll }
