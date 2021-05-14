import "../CSS/Header2.css"
import logo from '../Image/Logo.png';
import { useHistory } from 'react-router-dom';


export default function Header2(){
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
    return(


        
        <div className="headerContainer">
           
            <div className="element "><div className='hvr-radial-out' onClick={handleNothing}>CHAMBRES D'HOTES</div></div>
            <div className="element"><div className='hvr-radial-out' onClick={handleNothing}>SPA</div></div>
            <img src={logo} className="Logo" alt="logo" onClick={handleHome}/>
            <div className="element"><div className='hvr-radial-out' onClick={handleNothing}>TARIFS</div></div>
            <div className="element"><div className='hvr-radial-out' onClick={handleNothing}>ALENTOURS</div><button className="button_book" onClick={handleBook}>RESERVATION</button></div>
        </div>
    )
}