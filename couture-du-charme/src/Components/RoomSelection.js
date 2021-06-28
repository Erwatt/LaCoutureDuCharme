import Diaporama from './Diaporama';
import fragole1 from '../Image/fragole.jpg';
import fragole2 from '../Image/fragole2.jpg';
import fragole3 from '../Image/fragole3.jpg';
import cocoon1 from '../Image/cocoon.jpg';
import cocoon2 from '../Image/cocoon2.jpg';
import cocoon3 from '../Image/cocoon3.jpg';
import scandinave1 from '../Image/scandinave.jpg';
import scandinave2 from '../Image/scandinave2.jpg';
import scandinave3 from '../Image/scandinave3.jpg';
import '../CSS/RoomSelection.css';
// import {useState} from 'react';

function TextDisplay(props){
    switch(props.chambre){
        case "fragole":
            return (
                <div>
                    <div className="TextDisplay_Head">
                    <h1 className="TextDisplay_Title">Fragole</h1>
                    <p className="TextDisplay_Text center">La Couture du Charme vous propose notre chambre de au moins 35m² pas plus.
                                                            Elle met à votre service une salle de bain ainsi que des équipements moderne.</p>
                    </div>
                    <div className="equipements">
                        <h1 className="TextDisplay_Subtitle">EQUIPEMENTS FRAGOLE</h1>
                        <p className="TextDisplay_Text">- 1 Lit King size</p>
                        <p className="TextDisplay_Text">- TV</p>
                        <p className="TextDisplay_Text">- Douche</p>
                        <p className="TextDisplay_Text">- Wifi</p>
                    </div>
                    <div className="equipements_communs">
                        <h1 className="TextDisplay_Subtitle">EQUIPEMENTS COMMUNS</h1>
                        <p className="TextDisplay_Text">- Table</p>
                        <p className="TextDisplay_Text">- Cafetière</p>
                        <p className="TextDisplay_Text">- Terrasse commune (salon de jardin)</p>
                        <p className="TextDisplay_Text">- Micro-onde</p>
                        <p className="TextDisplay_Text">- Lave vaisselles</p>
                        <p className="TextDisplay_Text">- Réfrigérateur</p>
                    </div>
                    
                </div>
            );
        case "scandinave":
            return (
                <div>
                    <h1 className="TextDisplay_Title">Scandinave</h1>
                    <p className="TextDisplay_Text">J'éspère que vous allez bien</p>
                    <p className="TextDisplay_Text">prix : $£¤€</p>
                </div>
            );
        case "cocoon":
            return (
                <div>
                    <h1 className="TextDisplay_Title">Cocoon</h1>
                    <p className="TextDisplay_Text">C'est David Lafarge Pokémon</p>
                    <p className="TextDisplay_Text">prix : très chère</p>
                </div>
            );
        default:
            return (
                <div>
                <p>{props.chambre}</p>
                <p>Erreur, pas de chambre sélectionnée</p>
                </div>
            );
    }
}



function RoomSelection(props){
    // const [listImages, setListImages] = useState();
    var listImages =[]
    switch(props.room){
        case "fragole":
            // setListImages([fragole1, fragole2, fragole3]);
            listImages = [fragole1, fragole2, fragole3]
            break;
        case "cocoon":
            // setListImages([cocoon1, cocoon2, cocoon3]);
            listImages = [cocoon1, cocoon2, cocoon3];
            break;
        case "scandinave":
            // setListImages([scandinave1, scandinave2, scandinave3]);
            listImages = [scandinave1, scandinave2, scandinave3];
            break;
        default:
            break;
    }

    return (
        <div className="selectedRoom">
            <div className="element_selectedRoom">
                <Diaporama picturesList={listImages}/>
            </div>
            <div className="element_selectedRoom">
                <TextDisplay chambre={props.room}/>
            </div>
        </div>
    );
}

export default RoomSelection;