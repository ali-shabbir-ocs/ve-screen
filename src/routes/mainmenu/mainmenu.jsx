import './mainmenu.scss'
import Navigation from '../../components/navigation/navigation';
import { ReactComponent as Games } from '../../assets/our_games_logo.fc19882e.svg';
import { ReactComponent as Leader } from '../../assets/leaderboard_logo.202f49b3.svg';
import { ReactComponent as Play } from '../../assets/how_to_play_logo.ae1b3106.svg';
import { ReactComponent as Started } from '../../assets/start_game_logo.9ff5a0bd.svg';
import { Link, Outlet } from 'react-router-dom';

const Mainmenu = () => {
    return (
        <div className='mainmenu'>
            <Navigation />
            <div className='content'>
                <h3>Experios presents</h3>
                <h1>BLACKEYE'S TREASURE</h1>
                <div className='fourBoards'>
                    <Link to='/main-menu/game' className='link'>
                        <div className='board'>
                            <Games className="icon"></Games>
                            <h2>GAMES</h2>
                        </div>
                    </Link>
                    <Link to='/main-menu/leaderboard' className='link'>
                        <div className='board'>
                            <Leader className="icon"></Leader>
                            <h2>LEADERBOARD</h2>
                        </div>
                    </Link>
                    <Link to='/main-menu/how-to-play' className='link'>
                        <div className='board'>
                            <Play className="icon"></Play>
                            <h2>HOW TO PLAY</h2>
                        </div>
                    </Link>
                    <Link to='/main-menu/get-started' className='link'>
                        <div className='board1'>
                            <Started className="icon"></Started>
                            <h2>GET STARTED</h2>
                        </div>
                    </Link>
                </div>

            </div>
        </div>
    )
}
export default Mainmenu;