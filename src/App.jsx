import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Product from './pages/Product';
import Profile from './pages/Profile';
import ApiCall from './component/ApiCall';

const App = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/product' element={<Product/>}></Route>
            <Route path='/profile/:user_id' element={<Profile/>}></Route>
            <Route path='/apicall' element={<ApiCall></ApiCall>}> </Route>
        </Routes>
    </BrowserRouter>
  );
};

export default App;