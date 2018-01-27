import { sortBy } from 'lodash'
import { UnsafeAction } from './index'

export interface State {
  activeDomain: any
  development: boolean
  domains: any[]
  settings: any
  contentDashboard: any[]
  conferenceDashboard: any[]
  systemDashboard: any[]
  modules: any
}

export const State: State = {
  activeDomain: null,
  development: false,
  domains: [],
  settings: {},
  contentDashboard: [],
  conferenceDashboard: [],
  systemDashboard: [],
  modules: {},
}

export function reducer(state = State, action: UnsafeAction): State {
  switch (action.type) {
    case 'APP_LOAD_MODULE':
      const modules = state.modules
      modules[action.payload.moduleName] = action.payload.moduleConfig
      return Object.assign({}, state, modules)

    case 'APP_DEVELOPMENT_ENABLE':
      return Object.assign({}, state, { development: true })

    case 'APP_DOMAIN_ADD':
      return Object.assign({}, state, {
        domains: [...state.domains, action.payload],
        activeDomain: state.activeDomain || action.payload,
      })

    case 'APP_DOMAIN_SELECT':
    case 'APP_DOMAIN_SET':
      return Object.assign({}, state, { activeDomain: action.payload })

    case 'APP_SETTING_ADD':
      const settings = state.settings
      settings[action.payload.key] = action.payload.value

      return Object.assign({}, state, { settings })

    case 'APP_CONTENT_DASHBOARD':
      return Object.assign({}, state, {
        contentDashboard: sortBy([...state.contentDashboard, action.payload], ['weight']),
      })

    case 'APP_CONFERENCE_DASHBOARD':
      return Object.assign({}, state, {
        conferenceDashboard: sortBy([...state.conferenceDashboard, action.payload], ['weight']),
      })

    case 'APP_SYSTEM_DASHBOARD':
      return Object.assign({}, state, {
        systemDashboard: sortBy([...state.systemDashboard, action.payload], ['weight']),
      })

    default:
      return state
  }
}
