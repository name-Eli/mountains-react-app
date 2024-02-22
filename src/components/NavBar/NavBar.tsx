import { Link, useLocation } from 'react-router-dom';
import logo from '../../assets/logo.jpg'
import './NavBar.css';

const NavBar = () => {

    const location = useLocation();

    const tabs = [{ path: '/history', title: "History" }, { path: '/team', title: "Team" }]

    return (
        <nav className={`${location.pathname === '/' ? 'home' : ''} navbar`}>
            <Link className='logoContainer' to={'/'}>
                <img className="logo" src={logo} />
                {location.pathname !== '/' && <span className="logoName">LOSANGELES MOUNTAINS</span>}
            </Link>

            <ul>
                {
                    tabs.map((tab, index) =>
                        <li
                            className={tab.path === location.pathname ? 'activeTab' : ''}
                            key={index}
                        >
                            <Link className='link' to={`${tab.path}`}>{tab.title}</Link>
                        </li>
                    )
                }
            </ul>
        </nav>
    );
}

export default NavBar;