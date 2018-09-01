import PropTypes from 'prop-types'
import styled from 'styled-components'

import { Link } from 'react-router-dom'

const BUTTON_SIZE = '50px'
const SIZES_GAP = '30px'

const StyledLink = styled(Link)`
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

StyledLink.defaultProps = {
    float: false,
    link: ''
}

StyledLink.propTypes = {
    bottom: PropTypes.bool,
    float: PropTypes.bool,
    position: PropTypes.bool,
    right: PropTypes.bool,
    to: PropTypes.string
}

export default StyledLink
