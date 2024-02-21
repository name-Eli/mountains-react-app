import logo from '../../assets/logo.jpg'
import './NavBar.css';

const NavBar = () => {

    const tabs = ["History", "Team"]
    return (
        <nav className="navbar">
            <div className='logoContainer'>
                <img className="logo" src={logo} />
                <span className="logoName">LOSANGELES MOUNTAINS</span>
            </div>
            <ul>
                {
                    tabs.map((tab, index) =>
                        <li key={index}><a>{tab}</a></li>
                    )
                }
            </ul>
        </nav>
    );
}

export default NavBar;