import PropTypes from 'prop-types'
import React from 'react'

import i18n from 'i18n'

import { Button } from 'reactstrap'

import Confirm from 'components/confirm/Confirm'
import Icon from 'components/Icon'

const Delete = ({ obj, remove }) => (

    <Confirm
        message={ i18n.t('messages.confirm.api.delete') }
        onConfirm={ () => remove(obj.id) }
    >
        <Button className="ml-2" color="danger" size="sm"><Icon icon="trash"/></Button>
    </Confirm>

)

Delete.propTypes = {
    obj: PropTypes.object.isRequired,
    remove: PropTypes.func.isRequired
}

export default Delete
