import {ApiStatusModel} from '../../shared/interfaces/api';
import {ShopActions} from '../../shared/store/actions';
import {ShopConsts} from '../../shared/store/constants/shop';

const mockShop = {
  _id: '5f5a4fa151853f001886a5c5',
  location: {
    type: 'Point',
    coordinates: [11.71159, 42.67961]
  },
  description: '',
  phone: '0564633006',
  email: '10042@pharmaround.it',
  note: '',
  active: true,
  code: '10042',
  name: 'BRIGNALI DOTTOR  NEDO',
  address: 'VIA DEL PORTICO, 1',
  city: 'Sorano',
  cap: '58010',
  __v: 0,
  isVirtual: false,
  whatsapp: '',
  doctor: '',
  pro: false,
  display_name: '',
  region: 'toscana',
  whatsapp_prefix: ''
};

describe('Shop actions', () => {
  test('getShop', () => {
    expect(ShopActions.getShop('foo')).toEqual({
      type: ShopConsts.SHOP_GET,
      payload: {
        id: 'foo'
      }
    });
  });
  test('setShop', () => {
    expect(ShopActions.setShop(mockShop)).toEqual({
      type: ShopConsts.SHOP_SET,
      payload: {
        shop: mockShop
      }
    });
  });
  test('shopLoaded', () => {
    expect(ShopActions.shopLoaded(mockShop)).toEqual({
      type: ShopConsts.SHOP_LOADED,
      payload: {
        shop: mockShop
      }
    });
  });
  test('shopFailed', () => {
    expect(ShopActions.shopFailed('test')).toEqual({
      type: ShopConsts.SHOP_FAILED
    });
  });
  test('getShopList', () => {
    let tOffset = Math.random();
    let tLimit = Math.random();

    expect(ShopActions.getShopList(tOffset, tLimit)).toEqual({
      type: ShopConsts.SHOP_LIST_GET,
      payload: {
        offset: tOffset,
        limit: tLimit
      }
    });
  });

  test('setShopList', () => {
    expect(ShopActions.setShopList([mockShop])).toEqual({
      type: ShopConsts.SHOP_LIST_SET,
      payload: {
        shops: [mockShop]
      }
    });
  });
  test('shopListLoaded', () => {
    expect(ShopActions.shopListLoaded([mockShop])).toEqual({
      type: ShopConsts.SHOP_LIST_LOADED,
      payload: {
        shops: [mockShop]
      }
    });
  });
  test('shopListFailed', () => {
    expect(ShopActions.shopListFailed()).toEqual({
      type: ShopConsts.SHOP_LIST_FAILED
    });
  });
});
