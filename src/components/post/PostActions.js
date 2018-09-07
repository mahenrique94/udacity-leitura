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

const PostActions = ({ post }) => (

    <Actions>
        <PostVote post={ post }/>
        <PostEdit post={ post }/>
        <PostDelete post={ post }/>
    </Actions>

)

PostActions.propTypes = {
    post: PropTypes.objectOf(Post).isRequired
}

export default PostActions
