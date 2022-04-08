import { StoreConsts } from "../../constants/store";
import { ApiStatusModel } from "../../../models/api";
import StoreStateInterface from "../../../interfaces/store/storeState.interface";
import { initialStoreState } from "./initialStoreState";

import produce from "immer";

export default function storeReducer(state: StoreStateInterface = initialStoreState, action: {payload: any, type: String}) {
  return produce(state, draft => {
        console.log('REDUCERS -> MAIN -> storeReducer');
        
        switch (action.type) {

            case StoreConsts.STORE_GET:
                console.log('REDUCERS -> STORE_GET');
                draft.loadingStatus = ApiStatusModel.LOADING;
                draft.store = action.payload.store;
                break;

            case StoreConsts.STORE_SET:
                console.log('REDUCERS -> STORE_SET');
                console.log(action.payload.store);
                
                draft.loadingStatus = ApiStatusModel.LOADING;
                draft.store = action.payload.store;
                break;

            case StoreConsts.STORE_UPDATE:
                console.log('REDUCERS -> STORE_UPDATE');
                draft.loadingStatus = ApiStatusModel.LOADING;
                draft.store = action.payload.store;
                break;

            case StoreConsts.STORE_LOADING:
                console.log('REDUCERS -> STORE_LOADING');
                draft.loadingStatus = ApiStatusModel.LOADING;
                break;

            case StoreConsts.STORE_LOADED:
                console.log('REDUCERS -> STORE_LOADED');
                draft.loadingStatus = ApiStatusModel.LOADED;
                break;

            case StoreConsts.STORE_ERROR:
                console.log('REDUCERS -> STORE_ERROR');
                draft.loadingStatus = ApiStatusModel.FAILED;
                break;

            case StoreConsts.STORE_SUCCESS:
                console.log('REDUCERS -> STORE_SUCCESS');
                draft.loadingStatus = ApiStatusModel.SUCCESS;
                break;
        
        }
  });
}