import "../CSS/CardAccueil.css"
import React, { useState } from 'react';



export default function CardAccueil(props){

    const [isClicked, setClick] = useState(true);

    return(
        
        
           
        <>
            {isClicked?<div class="accueilcardBg" >
           
            
                <div class="titleAccueilCard">{props.Titre}</div>
                <button class="buttonCard" onClick={() => setClick(false)}>En savoir plus</button>
            
            </div>:
            <div class="accueilcard" >
            
                <div class="titleAccueilCard">{props.Titre}</div>
                <div class="descriptionAccueilCard">{props.description}</div>
                <button class="buttonCard" type="button" onClick={() => setClick(true)}>Retour</button>
            </div>
            
            }
            
        </>
    )
}

