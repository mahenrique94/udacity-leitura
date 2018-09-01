import PropTypes from 'prop-types'
import React, { Fragment } from 'react'

import { Media } from 'reactstrap'

import PostModel from '@/posts/Post'

const PostHeader = ({ post }) => {

    const { resume } = post
    return (
        <Fragment>
            <Media body className="mb-2">
                { resume }
            </Media>
        </Fragment>
    )

}

PostHeader.propTypes = {
    post: PropTypes.objectOf(PostModel).isRequired
}

export default PostHeader
