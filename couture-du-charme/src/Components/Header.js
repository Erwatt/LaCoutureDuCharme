import logo_fb from '../Image/Logo-fb.png';
import logo from '../Image/Logo.png';
import '../CSS/Header.css';
import { NavLink ,Router} from "react-router-dom"
import React from 'react';

import { useHistory } from 'react-router-dom';


function Header(){

    const history = useHistory();

    const handleBook=()=>{
        history.push("/Book");
    }
    const handleNothing=()=>{
        history.push("/Nothing");
    }
    const handleHome=()=>{
        history.push("/");
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
                            <img src={logo} className="MainLogo" alt="logo" onClick={handleHome}/>
                        </div>
                        <div className="element_up contact">
                        <button className="button_book_header" onClick={handleBook}>Réservation</button>
                        </div>
                    </div>
                    <div className="down">
                        <div className="element_down hvr-radial-outa" onClick={handleNothing}>
                            <h1>CHAMBRES D'HOTES</h1>
                        </div>
                        <div className="element_down hvr-radial-outa" onClick={handleNothing}>
                            <h1>SPA</h1>
                        </div>
                        <div className="element_down hvr-radial-outa" onClick={handleNothing}>
                            <h1>ALENTOURS</h1>
                        </div>
                        <div className="element_down hvr-radial-outa" onClick={handleNothing}>
                            <h1>TARIFS</h1>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;