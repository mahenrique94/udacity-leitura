import _ from 'lodash'
import PropTypes from 'prop-types'
import React from 'react'

import i18n from 'i18n'

import { not } from 'utils/functions'

import { Button, Modal, ModalBody, ModalFooter } from 'reactstrap'

import Icon from '../Icon'

const ConfirmModal = ({ isOpen, onClose, onConfirm }) => {

    const handleConfirm = () => {
        const { type } = onConfirm()
        if (not(_.isUndefined(type))) {
            onClose()
        }
    }

    return (
        <Modal isOpen={ isOpen } size="lg" toggle={ onClose }>
            <ModalBody>
                <Icon className="modal-icon" icon="exclamation-triangle" size="lg"/>
                { i18n.t('messages.confirm.api.delete') }
            </ModalBody>
            <ModalFooter>
                <Button color="danger" onClick={ onClose }>
                    <Icon hasSpace icon="thumbs-down"/>
                    { i18n.t('buttons.no') }
                </Button>
                <Button color="success" onClick={ handleConfirm }>
                    <Icon hasSpace icon="thumbs-up"/>
                    { i18n.t('buttons.yes') }
                </Button>
            </ModalFooter>
        </Modal>
    )

}

ConfirmModal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    onConfirm: PropTypes.func.isRequired
}

export default ConfirmModal
