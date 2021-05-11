import logo_fb from '../Image/Logo-fb.png';
import logo from '../Image/Logo.png';
import '../CSS/Header.css';

function Header(){
    return (
        <header>
            <div className="header">
                <div className="element_header">
                    <div className="up">
                        <div className="element_up">
                            <a href="https://www.facebook.com/coutureducharme"><img src={logo_fb} className="logo_fb" alt="logo facebook"/></a>
                        </div>
                        <div className="element_up">
                            <img src={logo} className="Logo" alt="logo"/>
                        </div>
                        <div className="element_up contact">
                            <p>E-mail : coutureducharme@gmail.com</p>
                            <p>Tél : 06 31 84 42 39</p>
                        </div>
                    </div>
                    <div className="down">
                        <div className="element_down hvr-radial-out">
                            <h1>Chambres</h1>
                        </div>
                        <div className="element_down hvr-radial-out">
                            <h1>Tarifs et réservation</h1>
                        </div>
                        <div className="element_down hvr-radial-out">
                            <h1>Centre de détente</h1>
                        </div>
                        <div className="element_down hvr-radial-out">
                            <h1>Contact</h1>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;