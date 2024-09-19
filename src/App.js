
import { Routes, Route } from 'react-router-dom';
import './App.scss';
import Login from '../src/routes/loginIn/loginIn.jsx'
import Mainmenu from './routes/mainmenu/mainmenu.jsx';
import Games from './routes/games/games.jsx';
import Leaderboard from './routes/leaderboard/leaderboard.jsx';
import Play from './routes/play/play.jsx';
import Started from './routes/started/started.jsx';
function App() {
  return (
    <Routes>
      <Route index path='/' element={<Login />}></Route>
      <Route path='/main-menu' element={<Mainmenu />}></Route>
      <Route path='/main-menu/game' element={<Games />}></Route>
      <Route path='/main-menu/leaderboard' element={<Leaderboard />}></Route>
      <Route path='/main-menu/how-to-play' element={<Play />}></Route>
      <Route path='/main-menu/get-started' element={<Started />}></Route>

    </Routes>
  );
}

export default App;
