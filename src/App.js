import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Login/Login';
import Signup from './Login/Signup';
import Footer from './Shared/Footer';
import Navbar from './Shared/Navbar';

function App() {
  return (
    <Navbar>
      <Routes>
        <Route path='/login' element={<Login></Login>} />
        <Route path='/signup' element={<Signup></Signup>} />
      </Routes>
      <Footer></Footer>
    </Navbar>
  );
}

export default App;
