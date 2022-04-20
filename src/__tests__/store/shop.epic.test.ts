import {ShopActions} from '../../shared/store/actions';
import {EpicDependencies} from '../../shared/store/epics/types';
import {getShopEpic} from '../../shared/store/epics/shop/ShopEpics';
import {initialStoreState} from '../../shared/store/initialStoreState';
import {of} from 'rxjs';
import axios from 'axios';
import {ShopConsts} from '../../shared/store/constants/shop';

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
const mockedAxios = axios as jest.Mocked<typeof axios>;

const mockDeps: EpicDependencies = {
  get: mockedAxios.get
};

describe('Shop epics', () => {
  describe('getShopEpic', () => {
    it('should correctly call api service to get data', (done) => {
      const tId = 'abc';

      const action$ = of(ShopActions.getShop(tId));
      const state$ = initialStoreState;
      const epic$ = getShopEpic(action$, state$, mockDeps);
      const expected$ = ShopActions.shopLoaded(mockShop);

      mockedAxios.get.mockResolvedValueOnce({data: mockShop});

      epic$.subscribe(() => {
        expect(axios.get).toBeCalledWith(
          `${process.env.REACT_APP_BASE_URL}/api/store/details/${tId}`
        );
        done();
      });
    });

    it('should dispatch the correct response on success', (done) => {
      const tId = 'abc';

      const action$ = of(ShopActions.getShop(tId));
      const state$ = initialStoreState;
      const epic$ = getShopEpic(action$, state$, mockDeps);

      mockedAxios.get.mockResolvedValueOnce({data: mockShop});

      epic$.subscribe((action: any) => {
        expect(action.type).toBe(ShopConsts.SHOP_LOADED);
        expect(action.payload).toStrictEqual({shop: mockShop});
        done();
      });
    });

    it('should dispatch the correct response on failure', (done) => {
      const tId = 'abc';

      const action$ = of(ShopActions.getShop(tId));
      const state$ = initialStoreState;
      const epic$ = getShopEpic(action$, state$, mockDeps);

      mockedAxios.get.mockRejectedValueOnce('abc');

      epic$.subscribe((action: any) => {
        expect(action.type).toBe(ShopConsts.SHOP_FAILED);
        done();
      });
    });
  });
});