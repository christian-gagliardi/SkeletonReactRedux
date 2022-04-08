import { StoreConsts } from "../../constants/store";
import StoreInterface  from "../../../interfaces/store/store.interface";

export function getStoreAction(id: String) {
    console.log('Action -> STORE_GET');
    
    return {
        type: StoreConsts.STORE_GET,
        payload: {
            id
        }
    }
}

export function setStoreAction(store: StoreInterface) {
    console.log('Action -> STORE_SET');
    
    return {
        type: StoreConsts.STORE_SET,
        payload: {
            store
        }
    }
}

export function updateStoreAction(store : StoreInterface) {
    console.log('Action -> STORE_UPDATE');
    
    return {
        type: StoreConsts.STORE_UPDATE,
        payload: {
          store
        }
      }
}

export function storeFailed() {
    console.log('Action -> STORE_ERROR');
    
    return {
      type: StoreConsts.STORE_ERROR
    }
}

export function storeLoadingAction() {
    console.log('Action -> STORE_LOADING');
    
    return {
        type: StoreConsts.STORE_LOADING
    }
}

export function storeLoadedAction() {
    console.log('Action -> STORE_LOADED');
    
    return {
        type: StoreConsts.STORE_LOADED
    }
}

export function storeSuccessAction() {
    console.log('Action -> STORE_SUCCESS');
    
    return {
      type: StoreConsts.STORE_SUCCESS
    }
}


// export const StoreActionType = { 
//     STORE_UPDATE  : { type: StoreConsts.STORE_UPDATE },
//     STORE_LOADING : { type: StoreConsts.STORE_LOADING },
//     STORE_ERROR   : { type: StoreConsts.STORE_ERROR },
//     STORE_GET     : { type: StoreConsts.STORE_GET },
//     STORE_SUCCESS : { type: StoreConsts.STORE_SUCCESS },
//     STORE_SET     : { type: StoreConsts.STORE_SET },
// }
