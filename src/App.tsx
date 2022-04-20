import {BrowserRouter as Router, Route, Link, BrowserRouter, Routes} from 'react-router-dom';
import HomeComponent from './pages/home/home.component';
import ShopList from './pages/list';
import ShopDetails from './pages/details';

const app = (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<HomeComponent />} />
      <Route path='/list' element={<ShopList />} />
      <Route path='/details/:shopId' element={<ShopDetails />} />
    </Routes>
  </BrowserRouter>
);

function AppRouter() {
  return <div id='RootContainer'> {app} </div>;
}

export default AppRouter;
