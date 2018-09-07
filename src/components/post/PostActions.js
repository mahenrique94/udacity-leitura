import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

import PostDelete from './PostDelete'
import PostEdit from './PostEdit'
import PostVote from './PostVote'

import Post from '@/posts/Post'

const Actions = styled.div`
    align-items: center;
    display: flex;
    justify-content: space-between;
    margin-top: .5rem;
`

const PostActions = ({ post, remove }) => (

    <Actions>
        <PostVote post={ post }/>
        <PostEdit post={ post }/>
        <PostDelete post={ post } remove={ remove }/>
    </Actions>

)

PostActions.propTypes = {
    post: PropTypes.objectOf(Post).isRequired,
    remove: PropTypes.func.isRequired
}

export default PostActions
