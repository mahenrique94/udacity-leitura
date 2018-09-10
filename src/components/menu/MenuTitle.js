import React from 'react'

import { Link } from 'react-router-dom'

import i18n from 'i18n'

import { routes } from 'routes'

const MenuTitle = () => <Link className="navbar-brand" data-cy="menu-title" to={ routes.postsList }>{ i18n.t('menu.title') }</Link>

export default MenuTitle
