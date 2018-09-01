import React from 'react'

import { Navbar } from 'reactstrap'

import MenuLinks from './MenuLinks'
import MenuTitle from './MenuTitle'

const Menu = () => (
    <Navbar className="mb-5" color="dark" dark data-cy="menu" expand="md" light>
        <MenuTitle/>
        <MenuLinks/>
    </Navbar>
)

export default Menu
