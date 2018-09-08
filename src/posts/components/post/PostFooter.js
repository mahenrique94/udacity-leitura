import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

import { Link } from 'react-router-dom'

import i18n from 'i18n'

import { not } from 'utils/functions'

import If from 'components/If'
import PostActions from './PostActions'

import PostModel from '@/posts/Post'

const Footer = styled.footer`
    display: flex;
    flex-direction: column;
    width: 100%;
`

const PostFooter = ({ details, post, remove, vote }) => {

    const { category, id } = post
    return (
        <Footer>
            <If condition={ not(details) } el={ null }>
                <Link className="btn btn-info  btn-sm mb-2" to={ `${category}/${id}` }>{ i18n.t('buttons.keep.reading') }</Link>
            </If>
            <Link className="badge badge-primary" to={ category }>{ category }</Link>
            <PostActions post={ post } remove={ remove } vote={ vote }/>
        </Footer>
    )

}

PostFooter.propTypes = {
    details: PropTypes.bool.isRequired,
    post: PropTypes.objectOf(PostModel).isRequired,
    remove: PropTypes.func.isRequired,
    vote: PropTypes.func.isRequired
}

export default PostFooter
