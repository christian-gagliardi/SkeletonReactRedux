import {combineEpics, ofType} from 'redux-observable';
import {switchMap, map, catchError, startWith} from 'rxjs/operators';
import Consts from '../../constants';
import {ShopActions} from '../../actions';

import {from, of} from 'rxjs';
import {EpicDependencies} from '../types';

export const getShopEpic = (action$: any, state$: any, deps: EpicDependencies) =>
  action$.pipe(
    ofType(Consts.ShopConsts.SHOP_GET),
    switchMap((action: {payload: {id: string}}) => {
      console.log('# EPIC -> getShopEpic 🌀');
      return from(
        deps.get(`${process.env.REACT_APP_BASE_URL}/api/store/details/${action.payload.id}`)
      ).pipe(
        map((response: any) => {
          console.log('# EPIC -> getShopEpic ✅');
          return ShopActions.shopLoaded(response.data);
        }),
        catchError((err) => {
          console.log('# EPIC -> getShopEpic ❌');
          return of(ShopActions.shopFailed(err));
        }),
        startWith(of(ShopActions.shopLoading()))
      );
    })
  );

export const getShopListEpic = (action$: any, state$: any, deps: EpicDependencies) =>
  action$.pipe(
    ofType(Consts.ShopConsts.SHOP_LIST_GET),
    switchMap((action: {payload: {offset: number; limit: number}}) => {
      console.log('# EPIC -> getShopListEpic 🌀');
      return from(
        deps.get(
          `${process.env.REACT_APP_BASE_URL}/api/store/list/${action.payload.offset}/${action.payload.limit}`
        )
      ).pipe(
        map((response: any) => {
          console.log('# EPIC -> getShopListEpic ✅ ');
          return ShopActions.shopListLoaded(response.data);
        }),
        catchError((err) => {
          console.log('# EPIC -> getShopListEpic ❌');
          return of(ShopActions.shopListFailed(err));
        }),
        startWith(of(ShopActions.shopListLoading()))
      );
    })
  );

export default combineEpics(getShopEpic, getShopListEpic);
