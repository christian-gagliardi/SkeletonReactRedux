import {ApiStatusModel} from '../interfaces/api';
import StoreStateInterface from '../interfaces/_state/storeState.interface';

export const initialStoreState: StoreStateInterface = {
  loadingStatus: ApiStatusModel.INITIAL,
  shop: null,
  shops: []
};
