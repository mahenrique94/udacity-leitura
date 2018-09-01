import React from 'react'

import i18n from 'i18n'

import { routes } from 'routes'

import Link from 'components/Link'

const MenuTitle = () => <Link className="navbar-brand" data-cy="menu-title" to={ routes.home }>{ i18n.t('menu.title') }</Link>

export default MenuTitle
