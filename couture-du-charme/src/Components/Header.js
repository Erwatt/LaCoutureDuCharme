import logo_fb from '../Image/Logo-fb.png';
import logo from '../Image/Logo.png';
import '../CSS/Header.css';
import { NavLink ,Router} from "react-router-dom"
import React from 'react';
import Button_Book from '../Components/Button-Route_Book'
import { useHistory } from 'react-router-dom';


function Header(){

    const history = useHistory();

    const handleHistory=()=>{
        history.push("/Book");
    }
   
    return (
        <header>
            <div className="header">
                <div className="element_header">
                    <div className="up">
                        <div className="element_up">
                            <a href="https://www.facebook.com/coutureducharme"><img src={logo_fb} className="logo_fb" alt="logo facebook"/></a>
                        </div>
                        <div className="element_up">
                            <img src={logo} className="MainLogo" alt="logo"/>
                        </div>
                        <div className="element_up contact">
                        <button className="button_book" onClick={handleHistory}>Réservation</button>
                        </div>
                    </div>
                    <div className="down">
                        <div className="element_down hvr-radial-outa">
                            <h1>CHAMBRES D'HOTES</h1>
                        </div>
                        <div className="element_down hvr-radial-outa">
                            <h1>SPA</h1>
                        </div>
                        <div className="element_down hvr-radial-outa">
                            <h1>ALENTOURS</h1>
                        </div>
                        <div className="element_down hvr-radial-outa">
                            <h1>TARIFS</h1>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;