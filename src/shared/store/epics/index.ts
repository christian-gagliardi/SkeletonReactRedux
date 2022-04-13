import { combineEpics, createEpicMiddleware } from 'redux-observable';
import storeEpic from './shop/ShopEpics';

export const rootEpic = combineEpics(storeEpic);

export default createEpicMiddleware();