import "../CSS/CardAccueil.css"
import React, { useState } from 'react';



export default function CardAccueil(props){

    const [isClicked, setClick] = useState(true);

    return(
        
        <div class="accueilcard" >
            {console.log(isClicked)}
            <div class="titleAccueilCard">{props.Titre}</div>
            {isClicked?<div class="insidecard"><img class="imgCard" src={props.img}></img><button onClick={() => setClick(false)}>En savoir plus</button></div>:<div class="insidecard"><div class="descriptionAccueilCard">{props.description}</div><button type="button" onClick={() => setClick(true)}>Retour</button></div>}
            
        </div>
    )
}