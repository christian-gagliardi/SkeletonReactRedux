import {BrowserRouter as Router, Route, Link, BrowserRouter, Routes} from 'react-router-dom';
import HomeComponent from './pages/home/home.component';
import ShopList from './pages/list';
import ShopDetails from './pages/details';
import {GlobalStyle} from './theme';
import PreviewPage from './pages/preview';

const app = (
  <BrowserRouter>
    <GlobalStyle />
    <Routes>
      <Route path='/' element={<HomeComponent />} />
      <Route path='/list' element={<ShopList />} />
      <Route path='/details/:shopId' element={<ShopDetails />} />
      <Route path='/preview' element={<PreviewPage />} />
    </Routes>
  </BrowserRouter>
);

function AppRouter() {
  return <div id='RootContainer'> {app} </div>;
}

export default AppRouter;
