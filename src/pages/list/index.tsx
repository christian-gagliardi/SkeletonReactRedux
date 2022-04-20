import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import ShowStoreComponent from '../../components/molecules/ShowStores/showStores.component';
import ShopInterface from '../../shared/interfaces/shop/shop.interface';
import {ShopActions} from '../../shared/store/actions';
import {RootState} from '../../shared/store/reducers';

const ShopList: React.FC = () => {
  const dispatch = useDispatch();

  const shops: ShopInterface[] | null = useSelector((state: RootState) => state.mainStore.shops);

  const [page, setPage] = useState<number>(0);
  const limit = 10;

  useEffect(() => {
    dispatch(ShopActions.getShopList(page, limit));
  }, [page]);

  const loadMore = async () => setPage((p) => p + 1);

  return (
    <div>
      {shops && shops.map((shop) => <ShowStoreComponent key={shop.code} stores={[shop]} />)}
    </div>
  );
};

export default ShopList;
