import { Link, useLocation } from 'react-router-dom';

import './NavBar.css';
import Logo from '../Logo/Logo';

const NavBar = () => {

    const location = useLocation();

    const tabs = [{ path: '/history', title: "History" }, { path: '/team', title: "Team" }]

    return (
        <nav className={`${location.pathname === '/' ? 'home' : ''} navbar`}>

            <Logo />

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