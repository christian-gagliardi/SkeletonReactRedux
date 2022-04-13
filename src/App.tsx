import {BrowserRouter as Router, Route, Link, BrowserRouter, Routes} from 'react-router-dom';
import HomeComponent from './pages/home/home.component';

const app = (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<HomeComponent />} />
    </Routes>
  </BrowserRouter>
);

function AppRouter() {
  return <div id='RootContainer'> {app} </div>;
}

export default AppRouter;
