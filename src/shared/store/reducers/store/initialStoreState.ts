import StoreStateInterface from "../../../interfaces/store/storeState.interface";
import { ApiStatusModel } from "../../../models/api";

export const initialStoreState: StoreStateInterface = {
    loadingStatus: ApiStatusModel.INITIAL,
    store: null
}