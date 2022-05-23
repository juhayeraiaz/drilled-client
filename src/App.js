import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Login/Login';
import Signup from './Login/Signup';
import Home from './Pages/Home/Home';
import Footer from './Shared/Footer';
import Navbar from './Shared/Navbar';

function App() {
  return (
    <Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>} />
        <Route path='/signup' element={<Signup></Signup>} />
      </Routes>
      <Footer></Footer>
    </Navbar>
  );
}

export default App;
