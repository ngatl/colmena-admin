import { layoutReducer } from './layout.reducer'
import { layoutInitialState } from './layout.init'
import { Layout } from './layout.interfaces'
import { DataLoaded } from './layout.actions'

describe('layoutReducer', () => {
  it('should work', () => {
    const state: Layout = layoutInitialState
    const action: DataLoaded = { type: 'DATA_LOADED', payload: {} }
    const actual = layoutReducer(state, action)
    expect(actual).toEqual(layoutInitialState)
  })
})
