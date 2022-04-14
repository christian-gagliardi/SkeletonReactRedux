import {ApiStatusModel} from '../../shared/interfaces/api';
import {ShopActions} from '../../shared/store/actions';
import {ShopConsts} from '../../shared/store/constants/shop';
import {initialStoreState} from '../../shared/store/initialStoreState';
import shopReducer from '../../shared/store/reducers/shop';
import {TestScheduler} from 'rxjs/testing';

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
  test('should return SHOP_GET action', () => {
    expect(ShopActions.getShopAction('foo')).toEqual({
      type: ShopConsts.SHOP_GET,
      payload: {
        id: 'foo'
      }
    });
  });
  test('should return SHOP_GET_ALL action', () => {
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
  test('should return SHOP_SET action', () => {
    expect(ShopActions.setShopAction(mockShop)).toEqual({
      type: ShopConsts.SHOP_SET,
      payload: {
        shop: mockShop
      }
    });
  });
  test('should return SHOP_SET_ALL action', () => {
    expect(ShopActions.setAllShopsAction([mockShop])).toEqual({
      type: ShopConsts.SHOP_SET_ALL,
      payload: {
        shops: [mockShop]
      }
    });
  });
  test('should return SHOP_LOADING action', () => {
    expect(ShopActions.shopLoadingAction()).toEqual({
      type: ShopConsts.SHOP_LOADING,
      payload: undefined
    });
  });
  test('should return SHOP_LOADED action', () => {
    expect(ShopActions.shopLoadedAction()).toEqual({
      type: ShopConsts.SHOP_LOADED,
      payload: undefined
    });
  });
  test('should return SHOP_ERROR action', () => {
    expect(ShopActions.shopFailed()).toEqual({
      type: ShopConsts.SHOP_ERROR,
      payload: undefined
    });
  });
  test('should return SHOP_SUCCESS action', () => {
    expect(ShopActions.shopSuccessAction()).toEqual({
      type: ShopConsts.SHOP_SUCCESS,
      payload: undefined
    });
  });
});

describe('Shop reducers', () => {
  test('should return the initial state', () => {
    expect(shopReducer(undefined, {type: '', payload: null})).toEqual(initialStoreState);
  });

  test('should handle shop details being added', () => {
    const previousState = initialStoreState;
    expect(shopReducer(undefined, {type: ShopConsts.SHOP_SET, payload: {shop: mockShop}})).toEqual({
      ...initialStoreState,
      shop: mockShop
    });
  });

  test('should handle shop list being added', () => {
    const previousState = initialStoreState;
    expect(
      shopReducer(undefined, {type: ShopConsts.SHOP_SET_ALL, payload: {shops: [mockShop]}})
    ).toEqual({
      ...initialStoreState,
      shops: [mockShop]
    });
  });

  test('should handle loading status', () => {
    const previousState = initialStoreState;
    expect(shopReducer(undefined, {type: ShopConsts.SHOP_LOADING, payload: undefined})).toEqual({
      ...initialStoreState,
      loadingStatus: ApiStatusModel.LOADING
    });
  });

  test('should handle loaded status', () => {
    const previousState = initialStoreState;
    expect(shopReducer(undefined, {type: ShopConsts.SHOP_LOADED, payload: undefined})).toEqual({
      ...initialStoreState,
      loadingStatus: ApiStatusModel.LOADED
    });
  });

  test('should handle failure status', () => {
    const previousState = initialStoreState;
    expect(shopReducer(undefined, {type: ShopConsts.SHOP_ERROR, payload: undefined})).toEqual({
      ...initialStoreState,
      loadingStatus: ApiStatusModel.FAILED
    });
  });

  test('should handle success status', () => {
    const previousState = initialStoreState;
    expect(shopReducer(undefined, {type: ShopConsts.SHOP_SUCCESS, payload: undefined})).toEqual({
      ...initialStoreState,
      loadingStatus: ApiStatusModel.SUCCESS
    });
  });
});

describe('Shop epics', () => {
  const testScheduler = new TestScheduler((actual, expected) => {
    // somehow assert the two objects are equal
    // e.g. with chai `expect(actual).deep.equal(expected)`
  });
});
