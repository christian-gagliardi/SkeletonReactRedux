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
    // console.log('# REDUCERS -> MAIN -> shopReducer -> ', action.type);

    switch (action.type) {
      case ShopConsts.SHOP_SET:
        console.log('# REDUCERS -> SHOP_SET');
        draft.shop = action.payload.shop;
        break;

      case ShopConsts.SHOP_LOADING:
        console.log('# REDUCERS -> SHOP_LOADING');
        draft.loadingStatus = ApiStatusModel.LOADING;
        break;

      case ShopConsts.SHOP_LOADED:
        console.log('# REDUCERS -> SHOP_LOADED');
        draft.shop = action.payload.shop;
        draft.loadingStatus = ApiStatusModel.LOADED;
        break;

      case ShopConsts.SHOP_FAILED:
        console.log('# REDUCERS -> SHOP_FAILED');
        draft.loadingStatus = ApiStatusModel.FAILED;
        break;

      case ShopConsts.SHOP_LIST_GET:
        console.log('# REDUCERS -> SHOP_LIST_GET');
        draft.loadingStatus = ApiStatusModel.LOADING;
        break;

      case ShopConsts.SHOP_LIST_SET:
        console.log('# REDUCERS -> SHOP_LIST_SET');
        draft.shops = action.payload.shops;
        break;

      case ShopConsts.SHOP_LIST_LOADING:
        console.log('# REDUCERS -> SHOP_LIST_LOADING');
        draft.loadingStatus = ApiStatusModel.LOADING;
        break;

      case ShopConsts.SHOP_LIST_LOADED:
        console.log('# REDUCERS -> SHOP_LIST_LOADED');
        draft.shops = action.payload.shops;
        draft.loadingStatus = ApiStatusModel.LOADED;
        break;

      case ShopConsts.SHOP_LIST_FAILED:
        console.log('# REDUCERS -> SHOP_LIST_FAILED');
        draft.loadingStatus = ApiStatusModel.FAILED;
        break;
    }
  });
}
