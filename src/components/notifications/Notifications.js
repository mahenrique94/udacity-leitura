import PropTypes from 'prop-types'
import React, { Component } from 'react'

import { connect } from 'react-redux'

import { getNotifications } from './selectors'

import NotificationsSystem from 'react-notification-system-redux'

class Notifications extends Component {

    static contextTypes = {
        store: PropTypes.object
    };

    static defaultProps = {
        notifications: []
    }

    static propTypes = {
        notifications: PropTypes.array,
        removeAll: PropTypes.func.isRequired
    };

    componentWillUnmount() {
        const { removeAll } = this.props
        removeAll()
    }

    render() {
        const { notifications } = this.props
        return <NotificationsSystem notifications={ notifications }/>
    }

}

const mapStateToProps = state => ({ notifications: getNotifications(state) })
const mapDispatchToProps = dispatch => ({ removeAll: () => dispatch(Notifications.removeAll()) })

export default connect(mapStateToProps, mapDispatchToProps)(Notifications)
