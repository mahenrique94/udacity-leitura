import React, { Component, Fragment } from 'react'

import i18n from 'i18n'

import {
    Collapse,
    NavbarToggler,
    Nav,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap'

class MenuLinks extends Component {

    state = {
        isOpen: false
    }

    render() {
        const { isOpen } = this.state
        return (
            <Fragment>
                <NavbarToggler onClick={ this.toggle }/>
                <Collapse isOpen={ isOpen } navbar>
                    <Nav className="ml-auto" data-cy="nav" navbar>
                        <UncontrolledDropdown data-cy="nav-languages" inNavbar nav>
                            <DropdownToggle caret data-cy="nav-languages-link" nav>{ i18n.t('menu.language') }</DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem data-cy="nav-languages-english">
                                    { i18n.t('languages.english') }
                                </DropdownItem>
                                <DropdownItem divider/>
                                <DropdownItem data-cy="nav-languages-portuguese">
                                    { i18n.t('languages.portuguese') }
                                </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                    </Nav>
                </Collapse>
            </Fragment>
        )
    }

    toggle = () => this.setState(({ isOpen }) => ({ isOpen: !isOpen }))

}

export default MenuLinks
