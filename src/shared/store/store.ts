import {applyMiddleware, createStore} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import epicMiddleware, {rootEpic} from './epics';
import thunk from 'redux-thunk';
import {rootReducer, initialState} from './reducers';

const composeEnhancer = composeWithDevTools({
  name: 'AdminV3'
});

const store = createStore(
  rootReducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk, epicMiddleware))
);

epicMiddleware.run(rootEpic);

export default store;
