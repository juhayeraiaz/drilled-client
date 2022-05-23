import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Login/Login';
import RequireAuth from './Login/RequireAuth';
import Signup from './Login/Signup';
import Home from './Pages/Home/Home';
import ItemDetail from './Pages/Items/ItemDetail';
import Items from './Pages/Items/Items';
import NotFound from './Pages/NotFound/NotFound';
import Footer from './Shared/Footer';
import Navbar from './Shared/Navbar';

function App() {
  return (
    <Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>} />
        <Route path='/signup' element={<Signup></Signup>} />
        <Route path='/items' element={<Items></Items>}></Route>
        <Route path='/items/:id' element={<RequireAuth><ItemDetail></ItemDetail></RequireAuth>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </Navbar>
  );
}

export default App;
