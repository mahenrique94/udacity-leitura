import React from 'react'

import i18n from 'i18n'

import App from 'containers/App'

import { Jumbotron } from 'reactstrap'

const Home = () => (

    <App>
        <Jumbotron>
            <h1 className="display-3" data-cy="app-title">{ i18n.t('titles.app') }</h1>
            <p className="lead" data-cy="app-describe">{ i18n.t('describes.app') }</p>
        </Jumbotron>
    </App>

)

export default Home
