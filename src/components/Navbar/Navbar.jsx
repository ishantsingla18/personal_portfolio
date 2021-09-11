import './Navbar.scss';
// import logo from '../../../public/images/logo.png';
import { LinkedIn, GitHub } from '@material-ui/icons';

function Navbar() {
    return (
        <div className="navbar">
            <div className="container">
                <div className="left">
                    <a href="#home" className="logo">
                        <img src="images/logo.png"alt="logo"/>
                    </a>
                    <a href="#home">HOME</a>
                    <a href="#about">ABOUT</a>
                    <a href="#projects">PROJECTS</a>
                </div>
                <div className="right">
                    <a href="https://www.linkedin.com/in/ishant-singla-361026191/" target="_blank">
                        <LinkedIn className="social linkedin" />
                    </a>
                    <a href="https://github.com/ishantsingla18" target="_blank">
                        <GitHub className="social github" />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Navbar
