import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

import { Button } from 'reactstrap'

import Icon from 'components/Icon'
import If from 'components/If'

import Post from '@/posts/Post'

const VoteScore = styled.div`
    flex-grow: 1;
`

const PostVote = ({ post }) => {

    const commonProps = {
        className: 'mr-2',
        size: 'sm'
    }
    const { voteScore } = post

    return (
        <VoteScore>
            <Button { ...commonProps } color="success">
                <If condition={ voteScore > 0 } el={ null }>
                    <span className="mr-2" style={ { verticalAlign: 'middle' } }>{ voteScore }</span>
                </If>
                <Icon icon="thumbs-up"/>
            </Button>
            <Button { ...commonProps } color="danger">
                <If condition={ voteScore < 0 } el={ null }>
                    <span className="mr-2" style={ { verticalAlign: 'middle' } }>{ voteScore }</span>
                </If>
                <Icon icon="thumbs-down"/>
            </Button>
        </VoteScore>
    )

}

PostVote.propTypes = {
    post: PropTypes.objectOf(Post).isRequired
}

export default PostVote
