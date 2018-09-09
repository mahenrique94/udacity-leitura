import PropTypes from 'prop-types'
import React from 'react'

import { Media } from 'reactstrap'

import PostContent from './PostContent'
import PostFooter from './PostFooter'
import PostHeader from './PostHeader'

import PostModel from '@/posts/Post'

const Post = ({ details, post, remove, vote }) => (

    <Media className="mt-5" data-cy="posts-post" style={ { flexDirection: 'column', position: 'relative' } }>
        <PostHeader post={ post }/>
        <PostContent details={ details } post={ post }/>
        <PostFooter details={ details } post={ post } remove={ remove } vote={ vote }/>
    </Media>

)

Post.defaultProps = {
    details: false
}

Post.propTypes = {
    details: PropTypes.bool,
    post: PropTypes.objectOf(PostModel).isRequired,
    remove: PropTypes.func.isRequired,
    vote: PropTypes.func.isRequired
}

export default Post
