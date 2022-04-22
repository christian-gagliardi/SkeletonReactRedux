import {combineEpics, ofType} from 'redux-observable';
import {
  switchMap,
  map,
  catchError,
  startWith,
  mergeMap,
  tap,
  delay,
  exhaustMap,
  raceWith,
  concatWith
} from 'rxjs/operators';
import Consts from '../../constants';
import {ShopActions} from '../../actions';

import {from, of} from 'rxjs';
import {EpicDependencies} from '../types';

export const getShopEpic = (action$: any, state$: any, deps: EpicDependencies) =>
  action$.pipe(
    ofType(Consts.ShopConsts.SHOP_GET),
    tap(() => console.log('# EPIC -> getShopEpic 🌀')),
    switchMap((action: {payload: {id: string}}) => {
      const data$ = from(
        deps.get(`${process.env.REACT_APP_BASE_URL}/api/store/details/${action.payload.id}`)
      ).pipe(
        //delay(3000),
        mergeMap((response: any) => {
          console.log('# EPIC -> getShopEpic ✅');
          return of(ShopActions.setShop(response.data));
        }),
        catchError((err) => {
          console.log('# EPIC -> getShopEpic ❌');
          return of(ShopActions.shopFailed(err));
        })
      );

      const showLoading$ = of(ShopActions.shopLoading()).pipe(delay(deps.loadingDelayMs));
      const hideLoading$ = of(ShopActions.shopLoaded());

      const shouldShowLoading$ = showLoading$.pipe(concatWith(data$, hideLoading$));

      return data$.pipe(raceWith(shouldShowLoading$));
    })
  );

export const getShopListEpic = (action$: any, state$: any, deps: EpicDependencies) =>
  action$.pipe(
    ofType(Consts.ShopConsts.SHOP_LIST_GET),
    switchMap((action: {payload: {offset: number; limit: number}}) => {
      const data$ = from(
        deps.get(
          `${process.env.REACT_APP_BASE_URL}/api/store/list/${action.payload.offset}/${action.payload.limit}`
        )
      ).pipe(
        //delay(3000),
        mergeMap((response: any) => {
          console.log('# EPIC -> getShopListEpic ✅ ', response);
          return of(ShopActions.setShopList(response.data));
        }),
        catchError((err) => {
          console.log('# EPIC -> getShopListEpic ❌', err);
          return of(ShopActions.shopListFailed(err));
        })
      );

      const showLoading$ = of(ShopActions.shopListLoading()).pipe(delay(deps.loadingDelayMs));
      const hideLoading$ = of(ShopActions.shopListLoaded());

      const shouldShowLoading$ = showLoading$.pipe(concatWith(data$, hideLoading$));

      return data$.pipe(raceWith(shouldShowLoading$));
    })
  );

export default combineEpics(getShopEpic, getShopListEpic);
