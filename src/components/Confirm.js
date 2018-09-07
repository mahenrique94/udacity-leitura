import PropTypes from 'prop-types'
import React from 'react'

const Confirm = ({ children }) => children

Confirm.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.array,
        PropTypes.func,
        PropTypes.object,
        PropTypes.string
    ]).isRequired
}

export default Confirm
