import { applyMiddleware, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import StoreStateInterface from '../interfaces/_state/storeState.interface'
import { ApiStatusModel } from '../interfaces/api'
import epicMiddleware, { rootEpic } from './epics'

import { rootReducer, initialState } from './reducers'

const composeEnhancer = composeWithDevTools({
    name: 'AdminV3',
})

const store = createStore(rootReducer, initialState, composeEnhancer(applyMiddleware(epicMiddleware)))

epicMiddleware.run(rootEpic)

export default store
