import "../CSS/Header2.css"
import logo from '../Image/Logo.png';

export default function Header2(){
    return(
        <div className="headerContainer">
            <div className="element "><div className='hvr-radial-out'>CHAMBRES D'HOTES</div></div>
            <div className="element"><div className='hvr-radial-out'>SPA</div></div>
            <img src={logo} className="Logo" alt="logo"/>
            <div className="element"><div className='hvr-radial-out'>TARIFS</div></div>
            <div className="element"><div className='hvr-radial-out'>ALENTOURS</div><button className="button_book">RESERVATION</button></div>
                
        </div>
    )
}