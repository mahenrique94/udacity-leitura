import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

import { Link } from 'react-router-dom'

import i18n from 'i18n'

import PostActions from './PostActions'

import PostModel from '@/posts/Post'

const Footer = styled.footer`
    display: flex;
    flex-direction: column;
    width: 100%;
`

const PostHeader = ({ post }) => {

    const { category, id } = post
    return (
        <Footer>
            <Link className="btn btn-info  btn-sm mb-2" to={ `${category}/${id}` }>{ i18n.t('buttons.keep.reading') }</Link>
            <Link className="badge badge-primary" to={ category }>{ category }</Link>
            <PostActions post={ post }/>
        </Footer>
    )

}

PostHeader.propTypes = {
    post: PropTypes.objectOf(PostModel).isRequired
}

export default PostHeader
