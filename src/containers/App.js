import PropTypes from 'prop-types'
import React, { Fragment } from 'react'

import { Container } from 'reactstrap'

import Menu from 'components/menu/Menu'
import Notifications from 'components/notifications/Notifications'

const App = ({ children }) => (

    <Fragment>
        <Notifications/>
        <Menu/>
        <Container className="mb-5">
            { children }
        </Container>
    </Fragment>

)

App.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.array,
        PropTypes.object,
        PropTypes.string
    ]).isRequired
}

export default App
