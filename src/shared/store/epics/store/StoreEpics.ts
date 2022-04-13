import { combineEpics, Epic } from "redux-observable";
import { switchMap, map, startWith, catchError, filter, mergeMap, tap } from "rxjs/operators";
import axios from "axios";
import Consts from '../../constants/'
import { StoreActions } from "../../actions";

import { from, of } from "rxjs";
import { isOfType } from "typesafe-actions";
import StoreInterface from "../../../interfaces/store/store.interface";


const getStoreEpic = ( action$:any, state$:any ) =>{
  console.log('EPIC -> INIT GET');
  return action$.pipe(
    filter(isOfType(Consts.StoreConsts.STORE_GET)),
    tap(()=>console.log('EPIC -> GET')),
    switchMap((action:{ payload: {id: string}}) => {
      return from(axios.get("http://localhost:3000/api/store/details/" + action.payload.id)).pipe(
        map((response:any) => StoreActions.setStoreAction(response.data)),
        startWith(StoreActions.storeLoadingAction()),
        catchError(() => of(StoreActions.storeFailed()))
      )
    })
  )
};

const setStoreEpic = ( action$:any, state$:any ) =>{
  console.log('EPIC -> INIT SET');
  
  return action$.pipe(
    tap(()=>console.log('EPIC -> SET')),
    filter(isOfType(Consts.StoreConsts.STORE_SET)),
    map((action:{ payload: {store: StoreInterface}}) => state$.store = action.payload.store),
    map(()=>StoreActions.storeLoadedAction()),
  )
};


export default combineEpics(getStoreEpic, setStoreEpic);