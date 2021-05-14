import CardAccueil from "./Card_accueil"
import "../CSS/Home.css"
import imgTest from "../Image/testimg.jpg"


export default function Home(){
    return(
        <div class="accueil_container">
            <div class="container-homePage">
            <div class="titleText">
                <h2>Ceci est un titre</h2>
            </div>
            
            <div class="text">
                Lorem ipsum dolor sit amet. Aut similique nisi et rerum possimus non porro iure. Ad blanditiis earum perferendis sunt est necessitatibus alias quo omnis incidunt eos minima tempora est excepturi unde ea dolorem reiciendis. Et quibusdam rerum et molestiae facere ea iste reprehenderit vel dolorem minus!
                Vel harum perferendis et consequatur veniam et veniam quae non doloribus animi vel nihil similique. Et dolores iusto ut nulla facere hic aliquam quaerat At illum nostrum in iure rerum. 33 inventore voluptatem sit blanditiis incidunt sit corrupti vitae qui nisi commodi. Sed numquam aperiam aut itaque voluptas non ratione consequatur.
                Ex itaque rerum ut veniam ipsam ad optio magni sed iure assumenda sit fugit itaque! Et optio unde id expedita omnis et saepe necessitatibus et facere nulla sed harum eaque vel nihil harum et quia distinctio. Qui quasi nobis non dolorum voluptatem sed ipsa nostrum sit expedita reiciendis id quia tenetur eum itaque unde. Et debitis delectus est provident autem aut quia adipisci.
            </div>
            <div class="cardAccueilContainer">
        
            <CardAccueil img={imgTest} description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." Titre="Chambres"/>
            <CardAccueil img={imgTest} description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur." Titre="Région"/>
            <CardAccueil img={imgTest} description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla elementum elit ante, a pellentesque elit fringilla iaculis. Vestibulum ut congue dui. Vestibulum sed aliquet quam. Pellentesque lectus nisi, mattis vitae erat pulvinar, tristique vulputate erat. In facilisis, elit eget efficitur eleifend, dolor ante ultricies dui, vitae pellentesque leo tellus quis metus. Sed lobortis est nec orci pulvinar faucibus sit amet sed velit. Nam laoreet nisi ut dolor bibendum porttitor. Sed in fringilla nunc." Titre="Etablissement"/>
            </div>
            </div>
        </div>

    )
}