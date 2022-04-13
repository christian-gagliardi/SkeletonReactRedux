import { useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';

import "./home.style.css";
import 'react-toastify/dist/ReactToastify.css';

import * as HomeService from '../../shared/services/home.service';

import ShowStoreComponent from "../../components/molecules/ShowStores/showStores.component";
import { pendingConfigObj, successConfigObj, errorConfigObj} from '../../utils/reactToastify/promiseConfig';
import closeButton from '../../utils/reactToastify/closeButton';

import StoreInterface from "../../shared/interfaces/shop/shop.interface";
import { RootState } from "../../shared/store/reducers";
import { ShopActions } from '../../shared/store/actions/';

function HomeComponent() {
    const [loadMoreParams, setLoadMoreParams] = useState(0);
    const [stores, setStores ] = useState<StoreInterface[]>();
    const [hideLoadMore, setHideLoadMore] = useState(false);
    
    const dispatch = useDispatch();
    const store = useSelector((state:RootState) => state.mainStore.shop);

    useEffect(()=>{
        console.log('USE-EFFECT');
        console.log('log of store in home component: ', store);
        
        if(!store){
            console.log('dispatch---------------------------------- start');            
            dispatch(ShopActions.getShopAction('5f5a4fa151853f001886a5c5'));
            console.log('end dispatch');
        }
    }, [store])


    console.log(stores)


    const getStoreFromService = async()=>{
        return new Promise(async(resolve, reject)=>{
            try{
                return await HomeService.fake_getDataFromServer(loadMoreParams, 20).then(async (result) => {
                    if(!result){ setHideLoadMore(true)}
                    setStores(result);
                    return resolve(1);
                }).catch((e)=> {throw new Error(e)});
            }catch(err){
                return reject(err)
            }
        })
    }
    
    useEffect(()=>{
        if(loadMoreParams >= 20) toast.promise( ()=> getStoreFromService(), { pending: pendingConfigObj, success: successConfigObj, error: errorConfigObj })
    }, [loadMoreParams])

    const loadMore = async()=>setLoadMoreParams((loadMoreParams) => loadMoreParams+=20);

    return (
        <div>
            <ToastContainer closeButton={closeButton}></ToastContainer>
            {(store) ? 
                <div>
                    <ShowStoreComponent stores={[store]} loadMore={loadMore}></ShowStoreComponent>
                    {(hideLoadMore) ? null : <h3 className="containerLoadMore"><a className="loadMore" onClick={loadMore}>Carica altri risultati</a></h3>}
                </div>
             : null}
        </div>
    );
}
  
export default HomeComponent;