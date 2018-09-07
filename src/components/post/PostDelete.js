import PropTypes from 'prop-types'
import React from 'react'

import i18n from 'i18n'

import { Button } from 'reactstrap'

import Confirm from 'components/confirm/Confirm'
import Icon from 'components/Icon'

import Post from '@/posts/Post'

const PostDelete = ({ post, remove }) => (

    <Confirm
        message={ i18n.t('messages.confirm.api.delete') }
        onConfirm={ () => remove(post.id) }
    >
        <Button className="ml-2" color="danger" size="sm"><Icon icon="trash"/></Button>
    </Confirm>

)

PostDelete.propTypes = {
    post: PropTypes.objectOf(Post).isRequired,
    remove: PropTypes.func.isRequired
}

export default PostDelete
