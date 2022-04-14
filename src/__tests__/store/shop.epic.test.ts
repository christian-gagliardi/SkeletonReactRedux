import {ApiStatusModel} from '../../shared/interfaces/api';
import {ShopActions} from '../../shared/store/actions';
import {ShopConsts} from '../../shared/store/constants/shop';
import {initialStoreState} from '../../shared/store/initialStoreState';
import shopReducer from '../../shared/store/reducers/shop';
import {TestScheduler} from 'rxjs/testing';
import axios from 'axios';
import {StateObservable} from 'redux-observable';
import ShopEpics from '../../shared/store/epics/shop/ShopEpics';

// reference: https://gist.github.com/TracyNgot/805b3a902bd62dcc5bfa507a824a0f01

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

jest.mock('axios');

describe('Shop epics', () => {
  describe('getStoreEpic', () => {
    it('should send correct actions when success', (done) => {
      const expected = ShopActions.shopLoadedAction();

      //const action$ = ActionsObservable.of(ShopActions.getShopAction('foo'));
    });
  });
});
