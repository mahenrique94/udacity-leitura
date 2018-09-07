import { types } from 'constants/OrderBy'
import { topics } from 'constants/Topics'

import _ from 'lodash'
import PropTypes from 'prop-types'
import PubSub from 'pubsub-js'
import React from 'react'
import sortBy from 'sort-by'

import i18n from 'i18n'

import { not } from 'utils/functions'

import { Col, Row, FormGroup, Label, Input } from 'reactstrap'

const OrderBy = ({ listToOrder }) => {

    const handleChange = event => {
        const orderBy = event.target.value
        let newList = []

        if (not(_.isEmpty(orderBy))) {
            newList = [].concat(listToOrder).sort(sortBy(orderBy))
        } else {
            newList = []
        }

        PubSub.publish(topics.POSTS_ORDERED, newList)
    }

    return (
        <Row>
            <Col xs={ 12 }>
                <FormGroup>
                    <Label for="orderBy">{ i18n.t('label.orderBy') }</Label>
                    <Input id="orderBy" name="orderBy" onChange={ handleChange } type="select">
                        <option value="">{ i18n.t('texts.selectOrder') }</option>
                        { types.map(({ text, value }) => <option key={ value } value={ value }>{ i18n.t(`texts.${text}`) }</option>) }
                    </Input>
                </FormGroup>
            </Col>
        </Row>
    )
}

OrderBy.propTypes = {
    listToOrder: PropTypes.array.isRequired
}

export default OrderBy
