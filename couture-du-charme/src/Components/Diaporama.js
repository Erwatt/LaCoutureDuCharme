import {useState} from "react";
import '../CSS/Diaporama.css';


function Diaporama(props){
    const images = props.picturesList;
    const [posDiapo, setPosDiapo] = useState(0);
    return (
        <div className="Diaporama">
            <div className="element_Diaporama">
                <img src={images[Math.abs(posDiapo % images.length)]} alt="diaporama" className="Diaporama_img"/>
            </div>
            <div className="element_Diaporama">
                <p className="hvr-bounce-to-left" onClick={() => setPosDiapo(posDiapo - 1)}>Précédent</p>
                <p className="hvr-bounce-to-right" onClick={() => setPosDiapo(posDiapo + 1)}>Suivant</p>
            </div>
            {console.log(Math.abs(posDiapo % images.length))}
        </div>
    );
}

export default Diaporama;