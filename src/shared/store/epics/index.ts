import { combineEpics, createEpicMiddleware } from 'redux-observable';
import storeEpic from './store/StoreEpics';

export const rootEpic = combineEpics(storeEpic);

export default createEpicMiddleware();