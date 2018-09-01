import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

import { Link } from 'react-router-dom'

import { routes } from 'routes'

import { Media } from 'reactstrap'

import PostCommentsCount from './PostCommentsCount'

import PostModel from '@/posts/Post'

const Header = styled.header`
    display: flex;
    flex-direction: column;
`

const PostHeader = ({ post }) => {

    const { author, commentCount, date, id, title } = post
    return (
        <Header>
            <Media heading>
                <Link to={ `${routes.postsList}/${id}` }>{ title }</Link>
            </Media>
            <time dateTime={ date }>{ date }</time>
            <small className="text-muted">{ author }</small>
            <PostCommentsCount>{ commentCount }</PostCommentsCount>
        </Header>
    )

}

PostHeader.propTypes = {
    post: PropTypes.objectOf(PostModel).isRequired
}

export default PostHeader
