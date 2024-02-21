import { useLocation } from 'react-router-dom';
import logo from '../../assets/logo.jpg'
import './NavBar.css';

const NavBar = () => {

    const location = useLocation();
    console.log(location.pathname);


    const tabs = [{ path: '/history', title: "History" }, { path: '/team', title: "Team" }]

    return (
        <nav className={location.pathname === '/' ? 'home navbar' : 'navbar'}>
            <div className='logoContainer'>
                <img className="logo" src={logo} />
                {location.pathname !== '/' && <span className="logoName">LOSANGELES MOUNTAINS</span>}
            </div>
            <ul>
                {
                    tabs.map((tab, index) =>
                        <li className={tab.path === location.pathname ? 'activeTab' : ''} key={index}><a>{tab.title}</a></li>
                    )
                }
            </ul>
        </nav>
    );
}

export default NavBar;