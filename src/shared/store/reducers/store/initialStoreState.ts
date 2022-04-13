import StoreStateInterface from "../../../interfaces/_state/storeState.interface";
import { ApiStatusModel } from "../../../models/api";

export const initialStoreState: StoreStateInterface = {
    loadingStatus: ApiStatusModel.INITIAL,
    store: null
}