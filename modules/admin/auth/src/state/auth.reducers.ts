import { createFeatureSelector } from '@ngrx/store'
import { UnsafeAction } from '../../../../../apps/admin/src/app/state'

export interface AuthState {
  currentUser: any
  loggedIn: boolean
  realms: any[]
  roles: {
    assigned: any[]
    unassigned: any[]
  }
}

const initialState: AuthState = {
  currentUser: null,
  loggedIn: false,
  realms: [],
  roles: {
    assigned: [],
    unassigned: [],
  },
}

export function reducer(state = initialState, action: UnsafeAction): AuthState {
  switch (action.type) {
    case 'AUTH_LOGIN':
      return Object.assign({}, state)

    case 'AUTH_LOGOUT_SUCCESS':
      return Object.assign({}, state, { currentUser: null, loggedIn: false })

    case 'AUTH_SET_TOKEN':
    case 'AUTH_LOGIN_SUCCESS':
      return Object.assign({}, state, { currentUser: action.payload, loggedIn: true })

    case 'AUTH_REALMS_ADD':
      return Object.assign({}, state, { realms: [...state.realms, action.payload] })

    case 'AUTH_SET_ROLES':
      return Object.assign({}, state, {
        roles: {
          assigned: [...state.roles.assigned, ...action.payload.assigned],
          unassigned: [...state.roles.unassigned, ...action.payload.unassigned],
        },
      })

    default:
      return state
  }
}

export const getAuthState = createFeatureSelector<AuthState>('auth');
