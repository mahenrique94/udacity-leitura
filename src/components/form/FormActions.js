import _ from 'lodash'
import PropTypes from 'prop-types'
import React from 'react'

import i18n from 'i18n'

import { routes } from 'routes'

import { not } from 'utils/functions'

import { Link } from 'react-router-dom'

import { Button, Col, Row } from 'reactstrap'

import Icon from 'components/Icon'
import If from 'components/If'

const FormActions = ({ canSubmit, cancelTo }) => (

    <Row className="mt-3 text-right">
        <Col xs={ 12 }>
            <If condition={ not(_.isEmpty(cancelTo)) } el={ null }>
                <Link className="btn btn-danger btn-md mr-2" to={ routes[cancelTo] }>
                    <Icon hasSpace icon="times"/>{ i18n.t('buttons.cancel') }
                </Link>
            </If>
            <Button color="success" disabled={ canSubmit } size="md" type="submit">
                <Icon hasSpace icon="save"/>{ i18n.t('buttons.save') }
            </Button>
        </Col>
    </Row>

)

FormActions.propTypes = {
    canSubmit: PropTypes.bool.isRequired,
    cancelTo: PropTypes.string.isRequired
}

export default FormActions
