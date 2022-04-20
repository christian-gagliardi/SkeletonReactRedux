import {ShopConsts} from '../../constants/shop';
import ShopInterface from '../../../interfaces/shop/shop.interface';

export function getShop(id: String) {
  console.log('# ACTION -> getShop');

  return {
    type: ShopConsts.SHOP_GET,
    payload: {
      id
    }
  };
}

export function setShop(shop: ShopInterface) {
  console.log('# ACTION -> setShop');

  return {
    type: ShopConsts.SHOP_SET,
    payload: {
      shop
    }
  };
}

export function shopLoading() {
  console.log('# ACTION -> shopLoading');

  return {
    type: ShopConsts.SHOP_LOADED
  };
}

export function shopLoaded(shop: ShopInterface) {
  console.log('# ACTION -> shopLoaded');

  return {
    type: ShopConsts.SHOP_LOADED,
    payload: {
      shop
    }
  };
}

export function shopFailed(reason?: string) {
  console.log('# ACTION -> shopFailed');

  return {
    type: ShopConsts.SHOP_FAILED
  };
}

export function getShopList(offset: number, limit: number) {
  console.log('# ACTION -> getShopList');

  return {
    type: ShopConsts.SHOP_LIST_GET,
    payload: {
      offset,
      limit
    }
  };
}

export function setShopList(shops: ShopInterface[]) {
  console.log('# ACTION -> setShopList');

  return {
    type: ShopConsts.SHOP_LIST_SET,
    payload: {
      shops
    }
  };
}

export function shopListLoading() {
  console.log('# ACTION -> shopListLoading');

  return {
    type: ShopConsts.SHOP_LOADED
  };
}

export function shopListLoaded(shops: ShopInterface[]) {
  console.log('# ACTION -> shopListLoaded');

  return {
    type: ShopConsts.SHOP_LIST_LOADED,
    payload: {
      shops
    }
  };
}

export function shopListFailed(reason?: string) {
  console.log('# ACTION -> shopListFailed');

  return {
    type: ShopConsts.SHOP_LIST_FAILED
  };
}
