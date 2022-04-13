import StoreInterface from "../store/store.interface";
import { ApiStatusModel } from "../../models/api";

export default interface StoreStateInterface {
    loadingStatus: ApiStatusModel;
    store: StoreInterface|null;
}