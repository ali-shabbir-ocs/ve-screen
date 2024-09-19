import './navigation.scss'
import { ReactComponent as Experios } from '../../assets/logo-expressio.db3f6345.svg';
import { ReactComponent as Logout } from '../../assets/logout.svg';
import { ReactComponent as Connected } from '../../assets/connected.svg';
const Navigation = () => {
    return (
        <div className='mainNavigation'>
            <div className='logo'><Experios></Experios></div>
            <div className='conlogout'>
                <button type='submit'><Connected className='logout'></Connected>6 CONNECTED</button>
                <button type='submit'><Logout className='logout'></Logout>LOG OUT</button>
            </div>
        </div>

    )
}
export default Navigation;