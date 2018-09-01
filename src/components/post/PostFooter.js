import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

import { Link } from 'react-router-dom'

import i18n from 'i18n'

import { routes } from 'routes'

import StarRatingComponent from 'react-star-rating-component'

import { Badge } from 'reactstrap'

import PostModel from '@/posts/Post'

const Footer = styled.footer`
    display: flex;
    flex-direction: column;
    width: 100%;
`

const PostHeader = ({ post }) => {

    const { category, id, voteScore } = post
    return (
        <Footer>
            <Link className="btn btn-info  btn-sm mb-2" to={ `${routes.postsList}/${id}` }>{ i18n.t('buttons.keep.reading') }</Link>
            <Badge color="primary">{ category }</Badge>
            <StarRatingComponent
                name="voteScore"
                onStarClick={ () => console.log('Cliquei') }
                starCount={ 10 }
                value={ voteScore }
            />
        </Footer>
    )

}

PostHeader.propTypes = {
    post: PropTypes.objectOf(PostModel).isRequired
}

export default PostHeader
