import {ApiStatusModel} from '../../shared/interfaces/api';
import {ShopConsts} from '../../shared/store/constants/shop';
import {initialStoreState} from '../../shared/store/initialStoreState';
import shopReducer from '../../shared/store/reducers/shop';

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

describe('Shop reducers', () => {
  it('should return the initial state', () => {
    expect(shopReducer(undefined, {type: '', payload: null})).toEqual(initialStoreState);
  });

  it('should handle shop details being requested', () => {
    const previousState = initialStoreState;
    expect(
      shopReducer(undefined, {type: ShopConsts.SHOP_GET, payload: {id: mockShop._id}})
    ).toEqual({
      ...previousState
    });
  });

  it('should handle shop details loading state', () => {
    const previousState = initialStoreState;
    expect(shopReducer(undefined, {type: ShopConsts.SHOP_LOADING, payload: undefined})).toEqual({
      ...previousState,
      loadingStatus: ApiStatusModel.LOADING
    });
  });

  it('should handle shop details being added', () => {
    const previousState = initialStoreState;
    expect(shopReducer(undefined, {type: ShopConsts.SHOP_SET, payload: {shop: mockShop}})).toEqual({
      ...previousState,
      shop: mockShop
    });
  });

  it('should handle shop details being loaded', () => {
    const previousState = initialStoreState;
    expect(
      shopReducer(undefined, {type: ShopConsts.SHOP_LOADED, payload: {shop: mockShop}})
    ).toEqual({
      ...previousState,
      loadingStatus: ApiStatusModel.LOADED,
      shop: mockShop
    });
  });

  it('should handle shop details fail', () => {
    const previousState = initialStoreState;
    expect(shopReducer(undefined, {type: ShopConsts.SHOP_FAILED, payload: undefined})).toEqual({
      ...previousState,
      loadingStatus: ApiStatusModel.FAILED
    });
  });

  it('should handle shop list being requested', () => {
    const previousState = initialStoreState;
    expect(
      shopReducer(undefined, {type: ShopConsts.SHOP_LIST_GET, payload: {offset: 0, limit: 10}})
    ).toEqual({
      ...previousState,
      loadingStatus: ApiStatusModel.LOADING
    });
  });

  it('should handle shop list loading state', () => {
    const previousState = initialStoreState;
    expect(
      shopReducer(undefined, {type: ShopConsts.SHOP_LIST_LOADING, payload: undefined})
    ).toEqual({
      ...previousState,
      loadingStatus: ApiStatusModel.LOADING
    });
  });

  it('should handle shop list being added', () => {
    const previousState = initialStoreState;
    expect(
      shopReducer(undefined, {type: ShopConsts.SHOP_LIST_SET, payload: {shops: [mockShop]}})
    ).toEqual({
      ...previousState,
      shops: [mockShop]
    });
  });

  it('should handle shop list being loaded', () => {
    const previousState = initialStoreState;
    expect(
      shopReducer(undefined, {type: ShopConsts.SHOP_LIST_LOADED, payload: {shops: [mockShop]}})
    ).toEqual({
      ...previousState,
      loadingStatus: ApiStatusModel.LOADED,
      shops: [mockShop]
    });
  });

  it('should handle shop list fail', () => {
    const previousState = initialStoreState;
    expect(shopReducer(undefined, {type: ShopConsts.SHOP_LIST_FAILED, payload: undefined})).toEqual(
      {
        ...previousState,
        loadingStatus: ApiStatusModel.FAILED
      }
    );
  });
});
