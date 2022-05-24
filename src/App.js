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
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './Pages/Dashboard/Dashboard';
import MyReview from './Pages/Dashboard/MyReview';
import MyProfile from './Pages/Dashboard/MyProfile';
import MyOrders from './Pages/Dashboard/MyOrders';
import Payment from './Pages/Dashboard/Payment';
import Users from './Pages/Dashboard/Users';
import RequireAdmin from './Login/RequireAdmin';

function App() {
  return (
    <Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>} />
        <Route path='/signup' element={<Signup></Signup>} />
        <Route path='/items' element={<Items></Items>}></Route>
        <Route path='/items/:id' element={<RequireAuth><ItemDetail></ItemDetail></RequireAuth>}></Route>

        <Route path='dashboard' element={
          <RequireAuth>
            <Dashboard />
          </RequireAuth>
        } >
          <Route index element={<MyProfile></MyProfile>}></Route>
          <Route path='review' element={<MyReview></MyReview>}></Route>
          <Route path="orders" element={<MyOrders></MyOrders>}></Route>
          <Route path="payment/:id" element={<Payment></Payment>}></Route>
          <Route path="users" element={<RequireAdmin><Users></Users></RequireAdmin>}></Route>
        </Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer />
    </Navbar>
  );
}

export default App;
