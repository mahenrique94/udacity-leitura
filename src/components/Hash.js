import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

const Hash = ({ className }) => <span className={ className }>#</span>

Hash.propTypes = {
    className: PropTypes.string.isRequired
}

const StyledHash = styled(Hash)`
    margin-right: .5rem
`

export default StyledHash
