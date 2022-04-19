import {Navigate} from 'react-router-dom';
import {useEffect, useState} from 'react';
import StoreInterface from '../../../shared/interfaces/shop/shop.interface';
import UiCardComponent from '../../atoms/UiCard/uiCard.component';
import './showStore.style.css';
import {capitalizeIt} from '../../../utils/functions';

function ShowStoreComponent({stores}: StoreInterface[] | any) {
  const [data, setData] = useState([]);
  const [redirect, setRedirect] = useState(0);
  useEffect(() => {
    if (!stores) return;
    let result: any = [];
    stores.forEach((i: any, v: number) => {
      result.push({
        key: i._id,
        code: i.code,
        name: capitalizeIt(i.name),
        address: capitalizeIt(i.address),
        city: capitalizeIt(i.city),
        image: '/images/pha-logo.svg'
      });
    });
    console.log('stores', stores);
    setData(result);
  }, [stores]);

  const showRedirect = (code: number) => {
    return setRedirect(code);
  };

  const renderStores = (
    <div className='card-grid-view' data-cy='show-store'>
      {data.map((e: any) => (
        <div key={e.key} className='card-body' onClick={() => showRedirect(e.code)}>
          <UiCardComponent content={e} />
        </div>
      ))}
    </div>
  );

  const renderRedirect = () => {
    const url = `/generate/qr/${redirect}`;
    return <Navigate to={url} />;
  };

  return redirect > 0 ? renderRedirect() : renderStores;
}

export default ShowStoreComponent;
