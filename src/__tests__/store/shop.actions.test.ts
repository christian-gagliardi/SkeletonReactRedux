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
  it('getShopAction', () => {
    expect(ShopActions.getShopAction('foo')).toEqual({
      type: ShopConsts.SHOP_GET,
      payload: {
        id: 'foo'
      }
    });
  });
  it('getAllShopsAction', () => {
    let tOffset = Math.random();
    let tLimit = Math.random();

    expect(ShopActions.getAllShopsAction(tOffset, tLimit)).toEqual({
      type: ShopConsts.SHOP_GET_ALL,
      payload: {
        offset: tOffset,
        limit: tLimit
      }
    });
  });
  it('setShopAction', () => {
    expect(ShopActions.setShopAction(mockShop)).toEqual({
      type: ShopConsts.SHOP_SET,
      payload: {
        shop: mockShop
      }
    });
  });
  it('setAllShopsAction', () => {
    expect(ShopActions.setAllShopsAction([mockShop])).toEqual({
      type: ShopConsts.SHOP_SET_ALL,
      payload: {
        shops: [mockShop]
      }
    });
  });
  it('shopLoadingAction', () => {
    expect(ShopActions.shopLoadingAction()).toEqual({
      type: ShopConsts.SHOP_LOADING,
      payload: undefined
    });
  });
  it('shopLoadedAction', () => {
    expect(ShopActions.shopLoadedAction()).toEqual({
      type: ShopConsts.SHOP_LOADED,
      payload: undefined
    });
  });
  it('shopFailed', () => {
    expect(ShopActions.shopFailed()).toEqual({
      type: ShopConsts.SHOP_ERROR,
      payload: undefined
    });
  });
  it('shopSuccessAction', () => {
    expect(ShopActions.shopSuccessAction()).toEqual({
      type: ShopConsts.SHOP_SUCCESS,
      payload: undefined
    });
  });
});
