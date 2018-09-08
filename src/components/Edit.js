import _ from 'lodash'
import PropTypes from 'prop-types'
import React from 'react'

import { Link } from 'react-router-dom'

import { routes } from 'routes'

import { not } from 'utils/functions'

import { Button } from 'reactstrap'

import Icon from 'components/Icon'
import If from 'components/If'

const Edit = ({ edit, link, obj }) => (

    <If condition={ not(_.isEmpty(link)) } el={
        <Button className="ml-2" color="warning" onClick={ edit } size="sm">
            <Icon icon="pencil-alt"/>
        </Button>
    }>
        <Link className="btn btn-warning btn-sm ml-2" to={ `${routes.postsList}/${obj.id}` }>
            <Icon icon="pencil-alt"/>
        </Link>
    </If>

)

Edit.defaultProps = {
    edit: null,
    link: ''
}

Edit.propTypes = {
    edit: PropTypes.func,
    link: PropTypes.string,
    obj: PropTypes.object.isRequired
}

export default Edit
