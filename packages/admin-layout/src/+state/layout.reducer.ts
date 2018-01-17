import { layoutInitialState } from './layout.init'
import { Layout } from './layout.interfaces'
import { Actions } from './layout.actions'

import { sortBy } from 'lodash'

export function layoutReducer(state: Layout = layoutInitialState, action: Actions): Layout {
  switch (action.type) {
    case 'LAYOUT_HEADER_NAV':
      return Object.assign({}, state, { headerNav: sortBy([...state.headerNav, action.payload], ['weight']) })

    case 'LAYOUT_FOOTER_LEFT':
      return Object.assign({}, state, { footerLeft: action.payload })

    case 'LAYOUT_FOOTER_RIGHT':
      return Object.assign({}, state, { footerRight: action.payload })

    case 'LAYOUT_SIDEBAR_NAV':
      return Object.assign({}, state, { sidebarNav: sortBy([...state.sidebarNav, action.payload], ['weight']) })

    default:
      return state
  }
}
