import _ from 'lodash'
import PropTypes from 'prop-types'
import React, { Fragment } from 'react'

import { not } from 'utils/functions'

import If from 'components/If'
import Loading from 'components/Loading'
import PostComponent from '../components/post/Post'

import Post from '../Post'

const PostsDetails = ({ post, remove, vote }) => (

    <Fragment>
        <If condition={ not(_.isEmpty(post)) } el={ <Loading/> }>
            <PostComponent details post={ post } remove={ remove } vote={ vote }/>
        </If>
    </Fragment>

)

PostsDetails.propTypes = {
    post: PropTypes.objectOf(Post).isRequired,
    remove: PropTypes.func.isRequired,
    vote: PropTypes.func.isRequired
}

export default PostsDetails
