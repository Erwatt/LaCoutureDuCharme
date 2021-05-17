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
                    <div className="ligne">1400, Rue de Beaumetz</div>
                    <div className="ligne">59310 Saméon</div>

                </div>
                <div className="flex-items">
                    <h3>Nous contacter</h3>
                    <div className="ligne">Téléphone : 06.31.84.42.39</div>
                    <div className="ligne">Email : coutureducharme@gmail.com</div>
                </div>
                <div className="flex-items">
                    <h3>Réseaux sociaux</h3>
                    <div className="ligne"><a href="https://www.facebook.com/coutureducharme" className="hvr-back-pulse" ><img className="logo" src={imgFacebook} alt="Facebook"></img><div>Facebook</div></a></div>
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