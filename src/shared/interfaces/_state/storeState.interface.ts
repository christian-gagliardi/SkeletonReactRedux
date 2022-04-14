import ShopInterface from '../shop/shop.interface';
import {ApiStatusModel} from '../api';

export default interface StoreStateInterface {
  loadingStatus: ApiStatusModel;
  shop: ShopInterface | null;
  shops: ShopInterface[] | null;
}
