import {combineReducers} from 'redux';
import storeReducer from './shop';
import {initialStoreState} from '../initialStoreState';

export const initialState = {
  mainStore: initialStoreState
};

export const rootReducer = combineReducers({
  mainStore: storeReducer
});

export type RootState = ReturnType<typeof rootReducer>;
