import { Link, useLocation } from 'react-router-dom';
import logo from '../../assets/logo.jpg'
import './Logo.css'

const Logo = () => {
    const location = useLocation();

    return (

        <Link className='logoContainer' to={'/'}>
            <img className="logo" src={logo} />
            {location.pathname !== '/' && <span className="logoName">LOSANGELES MOUNTAINS</span>}
        </Link>
    );
}

export default Logo;