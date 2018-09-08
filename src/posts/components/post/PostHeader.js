import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

import { Link } from 'react-router-dom'

import { Media } from 'reactstrap'

import Hash from 'components/Hash'
import Icon from 'components/Icon'
import PostCommentsCount from './PostCommentsCount'

import PostModel from '@/posts/Post'

const Header = styled.header`
    display: flex;
    flex-direction: column;
`

const PostHeader = ({ post }) => {

    const { author, category, commentCount, date, id, title } = post
    return (
        <Header>
            <Media heading>
                <Link to={ `${category}/${id}` }><Hash/>{ title }</Link>
            </Media>
            <time dateTime={ date }>{ date }</time>
            <small className="text-muted">{ author }</small>
            <PostCommentsCount>
                { commentCount }<Icon hasLeftSpace icon="comments" size="xs"/>
            </PostCommentsCount>
        </Header>
    )

}

PostHeader.propTypes = {
    post: PropTypes.objectOf(PostModel).isRequired
}

export default PostHeader
