import PropTypes from 'prop-types'
import React, { Fragment } from 'react'

import { Media } from 'reactstrap'

import PostModel from '@/posts/Post'

const PostContent = ({ details, post }) => {

    const { body, resume } = post
    return (
        <Fragment>
            <Media body className="mb-2">
                { details ? body : resume }
            </Media>
        </Fragment>
    )

}

PostContent.propTypes = {
    details: PropTypes.bool.isRequired,
    post: PropTypes.objectOf(PostModel).isRequired
}

export default PostContent
