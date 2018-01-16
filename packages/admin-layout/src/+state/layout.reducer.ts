import { Layout } from './layout.interfaces'
import { LayoutAction } from './layout.actions'

export function layoutReducer(state: Layout, action: LayoutAction): Layout {
  switch (action.type) {
    case 'DATA_LOADED': {
      return { ...state, ...action.payload }
    }
    default: {
      return state
    }
  }
}
