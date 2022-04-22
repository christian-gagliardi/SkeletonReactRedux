import axios from 'axios';
import {combineEpics, createEpicMiddleware} from 'redux-observable';
import storeEpic from './shop/ShopEpics';
import {EpicDependencies} from './types';

export const rootEpic = combineEpics(storeEpic);

const dependencies: EpicDependencies = {
  get: axios.get,
  loadingDelayMs: 0
};

export default createEpicMiddleware({
  dependencies
});
