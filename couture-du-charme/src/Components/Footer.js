import '../CSS/Footer.css'
import imgFacebook from '../Image/facebook-icone-footer.png'
import imgTwitter from '../Image/twitter-icone-footer.png'
import imgInstagram from '../Image/instagram-icone-footer.png'
import testimg from '../Image/testimg.jpg'
import { useHistory } from 'react-router-dom';



export default function Footer(){

    const history = useHistory();

    const handleNothing=()=>{
        history.push("/Nothing");
    }

   

    return(
       <div className="container">
           <div className="flex-container">
            <img src={testimg} alt="mainlogo" className="mainlogo"></img>
               <div className="flex-items">
               <h3>Adresse</h3>
                    <div className="ligne">74, Rue de Verdun</div>
                    <div className="ligne">91230 MONTGERON</div>

                </div>
                <div className="flex-items">
                    <h3>Nous contacter</h3>
                    <div className="ligne">Téléphone : 01.76.73.71.28</div>
                    <div className="ligne">Email : DonatienLacroix@teleworm.us</div>
                </div>
                <div className="flex-items">
                    <h3>Réseaux sociaux</h3>
                    <div className="ligne"><a onClick={handleNothing} className="hvr-back-pulse" ><img className="logo" src={imgFacebook} alt="Facebook"></img><div>Facebook</div></a></div>
                    <div className="ligne"><a onClick={handleNothing} className="hvr-back-pulse" ><img className="logo" src={imgTwitter} alt="Twitter"></img><div>Twitter</div></a></div>     
                    <div className="ligne"><a onClick={handleNothing} className="hvr-back-pulse"><img className="logo" src={imgInstagram} alt="Instagram"></img><div>Instagram</div></a></div>                 
                </div>
                <div className="flex-items">
                    <div className="ligne"><div className="hvr-back-pulse"  onClick={handleNothing}>Recrutement</div></div>
                    <div className="ligne"><a className="hvr-back-pulse"  onClick={handleNothing}>Politique de confidentialité</a></div>
                    <div className="ligne"><a className="hvr-back-pulse" onClick={handleNothing}>Mention légale</a></div>
                    


                </div>
           </div>


       </div> 
    )
}