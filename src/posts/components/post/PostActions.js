import PropTypes from 'prop-types'
import React from 'react'

import { routes } from 'routes'

import Actions from 'components/Actions'

import Post from '@/posts/Post'

const PostActions = ({ post, remove, vote }) =>
    <Actions link={ `${routes.postsForm}/${post.id}` } obj={ post } remove={ remove } vote={ vote }/>

PostActions.propTypes = {
    post: PropTypes.objectOf(Post).isRequired,
    remove: PropTypes.func.isRequired,
    vote: PropTypes.func.isRequired
}

export default PostActions
