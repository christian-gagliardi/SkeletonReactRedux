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

  it('should handle shop details being added', () => {
    const previousState = initialStoreState;
    expect(shopReducer(undefined, {type: ShopConsts.SHOP_SET, payload: {shop: mockShop}})).toEqual({
      ...previousState,
      shop: mockShop
    });
  });

  it('should handle shop list being added', () => {
    const previousState = initialStoreState;
    expect(
      shopReducer(undefined, {type: ShopConsts.SHOP_SET_ALL, payload: {shops: [mockShop]}})
    ).toEqual({
      ...previousState,
      shops: [mockShop]
    });
  });

  it('should handle loading status', () => {
    const previousState = initialStoreState;
    expect(shopReducer(undefined, {type: ShopConsts.SHOP_LOADING, payload: undefined})).toEqual({
      ...previousState,
      loadingStatus: ApiStatusModel.LOADING
    });
  });

  it('should handle loaded status', () => {
    const previousState = initialStoreState;
    expect(shopReducer(undefined, {type: ShopConsts.SHOP_LOADED, payload: undefined})).toEqual({
      ...previousState,
      loadingStatus: ApiStatusModel.LOADED
    });
  });

  it('should handle failure status', () => {
    const previousState = initialStoreState;
    expect(shopReducer(undefined, {type: ShopConsts.SHOP_ERROR, payload: undefined})).toEqual({
      ...previousState,
      loadingStatus: ApiStatusModel.FAILED
    });
  });

  it('should handle success status', () => {
    const previousState = initialStoreState;
    expect(shopReducer(undefined, {type: ShopConsts.SHOP_SUCCESS, payload: undefined})).toEqual({
      ...previousState,
      loadingStatus: ApiStatusModel.SUCCESS
    });
  });
});
