import logo from '../../assets/logo.jpg'
import './NavBar.css';

interface Props {
    tabs: string[];
}

const NavBar = ({ tabs }: Props) => {
    return (
        <nav className="navbar">
            <img className="logo" src={logo} />
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