import produce from 'immer'
import PropTypes from 'prop-types'
import React, { Component, Fragment } from 'react'

import { cloneChildren } from 'utils/react'

import ConfirmModal from './ConfirmModal'

class Confirm extends Component {

    static propTypes = {
        children: PropTypes.oneOfType([
            PropTypes.array,
            PropTypes.func,
            PropTypes.object,
            PropTypes.string
        ]).isRequired,
        onConfirm: PropTypes.func.isRequired
    }

    state = produce({}, () => ({ showConfirm: false }))

    render() {
        const { children, onConfirm } = this.props
        const { showConfirm } = this.state
        return (
            <Fragment>
                <ConfirmModal isOpen={ showConfirm } onClose={ this.hideConfirm } onConfirm={ onConfirm }/>
                { cloneChildren(children, { onClick: this.showConfirm }) }
            </Fragment>
        )
    }

    hideConfirm = () => this.toggleModal()

    toggleModal = () => {
        this.setState(
            produce(draftState => {
                draftState.showConfirm = !draftState.showConfirm
            })
        )
    }

    showConfirm = () => this.toggleModal()

}

export default Confirm
