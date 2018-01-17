import { Action } from '@ngrx/store'
import { ActionReducerMap } from '@ngrx/store'

import * as fromApp from './app.reducers'
import * as fromAuth from './../../../../../modules/admin/auth/src/state/auth.reducers'
import { Layout as fromLayoutState } from './../../../../../packages/admin-layout/src/+state/layout.interfaces'
import { layoutReducer as fromLayoutReducer } from './../../../../../packages/admin-layout/src/+state/layout.reducer'

export * from './app.actions'
export * from './app.effects'
export * from './app.reducers'

export interface ActionWithPayload<T> extends Action {
  payload?: T
}

export interface UnsafeAction extends Action {
  payload?: any
}

export interface State {
  app: fromApp.State
  auth: fromAuth.AuthState
  layout?: fromLayoutState
}

export const reducers: ActionReducerMap<State> = {
  app: fromApp.reducer,
  auth: fromAuth.reducer,
  layout: fromLayoutReducer
}

export const reducersConfig = {
  initialState: {},
}
