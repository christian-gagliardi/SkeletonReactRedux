import {ShopConsts} from '../../constants/shop';
import ShopInterface from '../../../interfaces/shop/shop.interface';

export function getShopAction(id: String) {
  console.log('Action -> SHOP_GET');

  return {
    type: ShopConsts.SHOP_GET,
    payload: {
      id
    }
  };
}

export function getAllShopsAction(offset: number, limit: number) {
  console.log('Action -> SHOP_GET_ALL');

  return {
    type: ShopConsts.SHOP_GET_ALL,
    payload: {
      offset,
      limit
    }
  };
}

export function setShopAction(store: ShopInterface) {
  console.log('Action -> SHOP_SET');

  return {
    type: ShopConsts.SHOP_SET,
    payload: {
      store
    }
  };
}

export function setAllShopsAction(shops: ShopInterface[]) {
  console.log('Action -> SHOP_SET_ALL');

  return {
    type: ShopConsts.SHOP_SET_ALL,
    payload: {
      shops
    }
  };
}

export function updateShopAction(store: ShopInterface) {
  console.log('Action -> SHOP_UPDATE');

  return {
    type: ShopConsts.SHOP_UPDATE,
    payload: {
      store
    }
  };
}

export function shopFailed() {
  console.log('Action -> SHOP_ERROR');

  return {
    type: ShopConsts.SHOP_ERROR
  };
}

export function shopLoadingAction() {
  console.log('Action -> SHOP_LOADING');

  return {
    type: ShopConsts.SHOP_LOADING
  };
}

export function shopLoadedAction() {
  console.log('Action -> SHOP_LOADED');

  return {
    type: ShopConsts.SHOP_LOADED
  };
}

export function shopSuccessAction() {
  console.log('Action -> SHOP_SUCCESS');

  return {
    type: ShopConsts.SHOP_SUCCESS
  };
}

// export const StoreActionType = {
//     SHOP_UPDATE  : { type: ShopConsts.SHOP_UPDATE },
//     SHOP_LOADING : { type: ShopConsts.SHOP_LOADING },
//     SHOP_ERROR   : { type: ShopConsts.SHOP_ERROR },
//     SHOP_GET     : { type: ShopConsts.SHOP_GET },
//     SHOP_SUCCESS : { type: ShopConsts.SHOP_SUCCESS },
//     SHOP_SET     : { type: ShopConsts.SHOP_SET },
// }
