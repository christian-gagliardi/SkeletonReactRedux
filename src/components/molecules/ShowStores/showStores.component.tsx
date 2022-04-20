import {Navigate} from 'react-router-dom';
import {useEffect, useState} from 'react';
import StoreInterface from '../../../shared/interfaces/shop/shop.interface';
import UiCardComponent from '../../atoms/UiCard/uiCard.component';
import './showStore.style.css';
import ShopInterface from '../../../shared/interfaces/shop/shop.interface';

function ShowStoreComponent({stores}: StoreInterface[] | any) {
  const [data, setData] = useState([]);
  const [redirect, setRedirect] = useState('');
  useEffect(() => {
    if (!stores) return;
    let result: any = [];
    stores.forEach((i: any, v: number) => {
      result.push({
        key: i._id,
        code: i.code,
        name: i.name.charAt(0).toUpperCase() + i.name.slice(1).toLowerCase(),
        address: i.address.charAt(0).toUpperCase() + i.address.slice(1).toLowerCase(),
        city: i.city.charAt(0).toUpperCase() + i.city.slice(1).toLowerCase(),
        image: '/images/pha-logo.svg'
      });
    });
    setData(result);
  }, [stores]);

  const showRedirect = (code: string) => {
    return setRedirect(code);
  };

  const renderStores = (
    <div className='card-grid-view'>
      {data.map((e: any) => (
        <div key={e.key} className='card-body' onClick={() => showRedirect(e.key)}>
          <UiCardComponent content={e} />
        </div>
      ))}
    </div>
  );

  const renderRedirect = () => {
    const url = `/details/${redirect}`;
    return <Navigate to={url} />;
  };

  return redirect != '' ? renderRedirect() : renderStores;
}

export default ShowStoreComponent;
