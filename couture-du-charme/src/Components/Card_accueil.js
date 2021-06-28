import "../CSS/CardAccueil.css";
import React, { useState } from 'react';



export default function CardAccueil(props){

    const [isClicked, setClick] = useState(true);

    return(
        
        
           
        <>
            {isClicked?<div class="accueilcardBg" onMouseEnter={() => setClick(false)}>
           
            
                <div class="titleAccueilCard" >{props.Titre}</div>
                <button class="buttonCard" >En savoir plus</button>
            
            </div>:
            <div class="accueilcard" onMouseLeave={() => setClick(true)}>
            
                <div class="titleAccueilCard">{props.Titre}</div>
                <div class="descriptionAccueilCard">{props.description}</div>
                <button class="buttonCard" type="button" >Retour</button>
            </div>
            
            }
            
        </>
    );
}

