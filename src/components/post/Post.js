import PropTypes from 'prop-types'
import React from 'react'

import { Media } from 'reactstrap'

import PostContent from './PostContent'
import PostFooter from './PostFooter'
import PostHeader from './PostHeader'

import PostModel from '@/posts/Post'

const Post = ({ post, remove }) => (

    <Media className="mt-5" style={ { flexDirection: 'column', position: 'relative' } }>
        <PostHeader post={ post }/>
        <PostContent post={ post }/>
        <PostFooter post={ post } remove={ remove }/>
    </Media>

)

Post.propTypes = {
    post: PropTypes.objectOf(PostModel).isRequired,
    remove: PropTypes.func.isRequired
}

export default Post
