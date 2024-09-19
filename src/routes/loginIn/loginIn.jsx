
import './login.scss'
import { ReactComponent as FingerPrint } from '../../assets/fingerprint.svg'
import { useNavigate } from 'react-router-dom'
const Login = () => {
    const navigate = useNavigate();
    return (
        <div className='login'>
            <div className='container'>
                <h1>VIRTUAL ESCAPE</h1>
                <h3>Enter your game code to get started</h3>
                <div className='inputGameCode'>
                    <input type='text' placeholder='Game Code' name='gamecode'></input>
                    <span className='question'>
                        <img className="formlogo" src="https://veautomation-fe-dev-dot-virtual-escape-295705.ts.r.appspot.com/static/media/tooltip.ccf899e2.svg" data-tip="true" data-for="inputTooltip" alt="" currentitem="false" >
                        </img>
                    </span>
                </div>
                <div className='buttons'>
                    <button className='test'>TEST CONNECTION</button>
                    <span className='logfinger'>
                        <button className='loginButton' onClick={() => navigate("/main-menu")}> LOG IN<FingerPrint className='finger'></FingerPrint></button>
                    </span>
                </div>
            </div>
            <div className='footer'><h3>v6.0.0</h3></div>
        </div>
    )

}
export default Login;