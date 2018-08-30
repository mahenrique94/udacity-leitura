import PropTypes from "prop-types"
import React from "react"

const Link = ({ children }) => <a href="/">{ children }</a>

Link.defaultProps = {
    children: {}
}

Link.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.array,
        PropTypes.object,
        PropTypes.string
    ])
}

export { Link }
