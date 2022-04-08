import { combineReducers } from 'redux';
import storeReducer from './store';
import { initialStoreState } from './store/initialStoreState';



export const initialState = {
  mainStore: initialStoreState
};

export const rootReducer = combineReducers({
  mainStore: storeReducer
});

export type RootState = ReturnType<typeof rootReducer>
