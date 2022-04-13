import { combineEpics, Epic } from 'redux-observable'
import { switchMap, map, startWith, catchError, filter, mergeMap, tap } from 'rxjs/operators'
import axios from 'axios'
import Consts from '../../constants'
import { ShopActions } from '../../actions'

import { from, of } from 'rxjs'
import { isOfType } from 'typesafe-actions'
import StoreInterface from '../../../interfaces/shop/shop.interface'

const getStoreEpic = (action$: any, state$: any) => {
    console.log('Epic -> getStoreEpic')
    return action$.pipe(
        filter(isOfType(Consts.ShopConsts.SHOP_GET)),
        switchMap((action: { payload: { id: string } }) => {
            return from(axios.get('http://localhost:3001/api/store/details/' + action.payload.id)).pipe(
                map((response: any) => ShopActions.setShopAction(response.data)),
                startWith(ShopActions.shopLoadingAction()),
                catchError(() => of(ShopActions.shopFailed())),
            )
        }),
    )
}

const getAllStoresEpic = (action$: any, state$: any) => {
    console.log('Epic -> getAllStoresEpic')
    return action$.pipe(
        filter(isOfType(Consts.ShopConsts.SHOP_GET_ALL)),
        switchMap((action: { payload: { offset: number; limit: number } }) => {
            return from(
                axios.get(`http://localhost:3001/api/store/list/${action.payload.offset}/${action.payload.limit}`),
            ).pipe(
                map((response: any) => ShopActions.setAllShopsAction(response.data)),
                startWith(ShopActions.shopLoadingAction()),
                catchError(() => of(ShopActions.shopFailed())),
            )
        }),
    )
}

const setStoreEpic = (action$: any, state$: any) => {
    console.log('Epic -> setStoreEpic')

    return action$.pipe(
        filter(isOfType(Consts.ShopConsts.SHOP_SET)),
        map((action: { payload: { store: StoreInterface } }) => (state$.store = action.payload.store)),
        map(() => ShopActions.shopLoadedAction()),
    )
}

export default combineEpics(getStoreEpic, setStoreEpic, getAllStoresEpic)
