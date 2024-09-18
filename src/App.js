
import { Routes, Route } from 'react-router-dom';
import './App.scss';
import Login from '../src/routes/loginIn/loginIn.jsx'
import Mainmenu from './routes/mainmenu/mainmenu.jsx';
function App() {
  return (
    <Routes>
      <Route index path='/' element={<Login />}></Route>
      <Route path='main-menu' element={<Mainmenu />}></Route>
    </Routes>
  );
}

export default App;
