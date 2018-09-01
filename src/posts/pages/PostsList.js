import PropTypes from 'prop-types'
import React, { Fragment } from 'react'

import { routes } from 'routes'

import { Container } from 'reactstrap'

import Button from 'components/Button'
import Icon from 'components/Icon'
import If from 'components/If'
import Loading from 'components/Loading'
import Post from 'components/post/Post'

const PostsList = ({ list, loading }) => (

    <Fragment>
        <If condition={ !loading } el={ Loading }>
            <Container data-cy="posts" style={ { maxWidth: '720px' } }>
                { list.map(post => <Post data-cy={ `post-${post.title}` } key={ post.id } post={ post }/>) }
            </Container>
        </If>
        <Button bottom float position right to={ routes.postsForm }>
            <Icon icon="plus"/>
        </Button>
    </Fragment>

)

PostsList.propTypes = {
    list: PropTypes.arrayOf(PropTypes.object).isRequired,
    loading: PropTypes.bool.isRequired
}

export default PostsList
