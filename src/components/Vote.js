import { types } from 'constants/Votes'

import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

import { Button } from 'reactstrap'

import Icon from 'components/Icon'
import If from 'components/If'

const VoteScore = styled.div`
    flex-grow: 1;
`

const Vote = ({ obj, vote }) => {

    const commonProps = { className: 'mr-2', size: 'sm' }
    const { voteScore } = obj

    return (
        <VoteScore>
            <Button { ...commonProps } color="success" onClick={ () => vote(obj.id, types.up) }>
                <If condition={ voteScore > 0 } el={ null }>
                    <span className="mr-2" style={ { verticalAlign: 'middle' } }>{ voteScore }</span>
                </If>
                <Icon icon="thumbs-up"/>
            </Button>
            <Button { ...commonProps } color="danger" onClick={ () => vote(obj.id, types.down) }>
                <If condition={ voteScore < 0 } el={ null }>
                    <span className="mr-2" style={ { verticalAlign: 'middle' } }>{ voteScore }</span>
                </If>
                <Icon icon="thumbs-down"/>
            </Button>
        </VoteScore>
    )

}

Vote.propTypes = {
    obj: PropTypes.object.isRequired,
    vote: PropTypes.func.isRequired
}

export default Vote
