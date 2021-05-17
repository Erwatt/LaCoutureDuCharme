import "../CSS/CardAccueil.css"
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';



export default function CardAccueil(props){

    const [isClicked, setClick] = useState(true);
    const history = useHistory();
    const handleRooms=()=>{
        history.push("/Rooms");
    }

    const handleAlentours=()=>{
        history.push("/Alentours");
    }

    return(
        
        
           
        <>
            {isClicked?<div class="accueilcardBg" >
           
            
                <div class="titleAccueilCard">{props.Titre}</div>
                <button class="buttonCard" onClick={() => setClick(false)}>En savoir plus</button>
            
            </div>:
            <div class="accueilcard" >
                <div className="headerCard">
                    <div class="titleAccueilCard">{props.Titre}</div>
                    {
                        props.Titre=="Chambres"?<div><div className="buttonHeaderCard" onClick={handleRooms}>Voir les chambres</div><div className="headerCardArrow">--=</div></div>:false
                    }
                    {
                        props.Titre=="Région"?<div><div className="buttonHeaderCard" onClick={handleAlentours}>Voir les alentours</div><div className="headerCardArrow">--=</div></div>:false
                    }
                    
                </div>
                <div class="descriptionAccueilCard">{props.description}</div>
                <button class="buttonCard" type="button" onClick={() => setClick(true)}>Retour</button>
            </div>
            
            }
            
        </>
    )
}

