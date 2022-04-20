import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useParams} from 'react-router-dom';
import UiCardComponent from '../../components/atoms/UiCard/uiCard.component';
import ShowStoreComponent from '../../components/molecules/ShowStores/showStores.component';
import {ApiStatusModel} from '../../shared/interfaces/api';
import ShopInterface from '../../shared/interfaces/shop/shop.interface';
import {ShopActions} from '../../shared/store/actions';
import {RootState} from '../../shared/store/reducers';

const ShopDetailsPage: React.FC = () => {
  let {shopId} = useParams();

  const dispatch = useDispatch();

  const shop: ShopInterface | null = useSelector((state: RootState) => state.mainStore.shop);
  const apiState: ApiStatusModel = useSelector((state: RootState) => state.mainStore.loadingStatus);

  useEffect(() => {
    if (shopId) {
      dispatch(ShopActions.getShop(shopId));
    }
  }, [shopId]);

  return shop ? <ShowStoreComponent stores={[shop]}></ShowStoreComponent> : <div />;
};

export default ShopDetailsPage;
