import {ShopConsts} from '../../constants/shop';
import {ApiStatusModel} from '../../../interfaces/api';
import StoreStateInterface from '../../../interfaces/_state/storeState.interface';
import {initialStoreState} from '../../initialStoreState';

import produce from 'immer';

export default function shopReducer(
  state: StoreStateInterface = initialStoreState,
  action: {payload: any; type: String}
) {
  return produce(state, (draft) => {
    console.log('REDUCERS -> MAIN -> storeReducer');

    switch (action.type) {
      case ShopConsts.SHOP_SET:
        console.log('REDUCERS -> SHOP_SET');
        draft.shop = action.payload.shop;
        break;

      case ShopConsts.SHOP_SET_ALL:
        console.log('REDUCERS -> SHOP_SET_ALL');
        draft.shops = action.payload.shops;
        break;

      case ShopConsts.SHOP_LOADING:
        console.log('REDUCERS -> SHOP_LOADING');
        draft.loadingStatus = ApiStatusModel.LOADING;
        break;

      case ShopConsts.SHOP_LOADED:
        console.log('REDUCERS -> SHOP_LOADED');
        draft.loadingStatus = ApiStatusModel.LOADED;
        break;

      case ShopConsts.SHOP_ERROR:
        console.log('REDUCERS -> SHOP_ERROR');
        draft.loadingStatus = ApiStatusModel.FAILED;
        break;

      case ShopConsts.SHOP_SUCCESS:
        console.log('REDUCERS -> SHOP_SUCCESS');
        draft.loadingStatus = ApiStatusModel.SUCCESS;
        break;
    }
  });
}
