import '../CSS/Footer.css'
import imgFacebook from '../Image/facebook-icone-footer.png'
import imgTwitter from '../Image/twitter-icone-footer.png'
import imgInstagram from '../Image/instagram-icone-footer.png'
import testimg from '../Image/testimg.jpg'
//import logo from '../Image/logo'


export default function Footer(){
    return(
       <div class="container">
           <div class="flex-container">
            <img src={testimg} class="mainlogo"></img>
               <div class="flex-items">
               <h3>Adresse</h3>
                    <div class="ligne">74, Rue de Verdun</div>
                    <div class="ligne">91230 MONTGERON</div>

                </div>
                <div class="flex-items">
                    <h3>Nous contacter</h3>
                    <div class="ligne">Téléphone : 01.76.73.71.28</div>
                    <div class="ligne">Email : DonatienLacroix@teleworm.us</div>
                </div>
                <div class="flex-items">
                    <h3>Réseaux sociaux</h3>
                    <div class="ligne"><a class="hvr-back-pulse" href="https://www.google.fr/"><img class="logo" src={imgFacebook} alt="Facebook"></img><div>Facebook</div></a></div>
                    <div class="ligne"><a class="hvr-back-pulse" href="https://www.google.fr/"><img class="logo" src={imgInstagram} alt="Twitter"></img><div>Twitter</div></a></div>     
                    <div class="ligne"><a class="hvr-back-pulse" href="https://www.google.fr/"><img class="logo" src={imgTwitter} alt="Instagram"></img><div>Instagram</div></a></div>                 
                </div>
                <div class="flex-items">
                    <div class="ligne"><a class="hvr-back-pulse" href="https://www.google.fr/">Recrutement</a></div>
                    <div class="ligne"><a class="hvr-back-pulse" href="https://www.google.fr/">Politique de confidentialité</a></div>
                    <div class="ligne"><a class="hvr-back-pulse" href="https://www.google.fr/">Mention légale</a></div>
                    


                </div>
           </div>


       </div> 
    )
}