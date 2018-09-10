import React from 'react'

import { Link } from 'react-router-dom'

import i18n from 'i18n'

import { routes } from 'routes'

import { Jumbotron } from 'reactstrap'

const NotFound = () => (

    <Jumbotron>
        <h1 className="display-3"><strong>404</strong>&nbsp;-&nbsp;{ i18n.t('titles.page.notFound') }</h1>
        <Link className="btn btn-primary btn-block" to={ routes.postsList }>{ i18n.t('buttons.backHome') }</Link>
    </Jumbotron>

)

export default NotFound
