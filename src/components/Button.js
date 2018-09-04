import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

import { Link } from 'react-router-dom'

const BUTTON_SIZE = '50px'
const SIZES_GAP = '30px'

const Button = ({ children, className, to }) => <Link className={ className } to={ to }>{ children }</Link>

Button.defaultProps = {
    bottom: false,
    float: false,
    position: false,
    right: false
}

Button.propTypes = {
    bottom: PropTypes.bool,
    children: PropTypes.oneOfType([
        PropTypes.array,
        PropTypes.object,
        PropTypes.string
    ]).isRequired,
    className: PropTypes.string.isRequired,
    float: PropTypes.bool,
    position: PropTypes.bool,
    right: PropTypes.bool,
    to: PropTypes.string.isRequired
}

const StyledButton = styled(Button)`
    background: #0099FF;
    ${({ float }) => float ? 'border-radius: 100%;' : ''}
    ${({ bottom }) => bottom ? 'bottom: 25px;' : ''}
    color: #FDFDFD;
    height: ${BUTTON_SIZE};
    line-height: 1.3;
    padding: 1rem;
    ${({ position }) => position ? 'position: fixed;' : ''}
    ${({ right }) => right ? `right: ${SIZES_GAP};` : `left: ${SIZES_GAP};`}
    text-align: center;
    width: ${BUTTON_SIZE};
    &:hover {
        background: #007ACC;
        color: #FDFDFD;
    }
`

export default StyledButton
