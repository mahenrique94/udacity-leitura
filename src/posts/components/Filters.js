import PropTypes from 'prop-types'
import React, { Fragment } from 'react'

import { Link } from 'react-router-dom'

import OrderBy from './OrderBy'

const Filters = ({ categories, list, originalList }) => (

    <Fragment>
        <OrderBy listToOrder={ list } originalList={ originalList }/>
        { categories.map(({ name }, index) => <Link className="badge badge-secondary mr-3" key={ index } to={ name }>{ name }</Link>) }
    </Fragment>

)

Filters.propTypes = {
    categories: PropTypes.arrayOf(PropTypes.object).isRequired,
    list: PropTypes.arrayOf(PropTypes.object).isRequired,
    originalList: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default Filters
