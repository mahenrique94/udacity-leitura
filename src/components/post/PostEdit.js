import PropTypes from 'prop-types'
import React from 'react'

import { Link } from 'react-router-dom'

import { routes } from 'routes'

import Icon from 'components/Icon'

import Post from '@/posts/Post'

const PostEdit = ({ post }) => (

    <Link className="btn btn-warning btn-sm ml-2" to={ `${routes.postsList}/${post.id}` }>
        <Icon icon="pencil-alt"/>
    </Link>

)

PostEdit.propTypes = {
    post: PropTypes.objectOf(Post).isRequired
}

export default PostEdit
