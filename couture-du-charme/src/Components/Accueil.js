import CardAccueil from "./Card_accueil"
import "../CSS/Accueil.css"
import imgTest from "../Image/testimg.jpg"


export default function Accueil(){
    return(
        <div class="accueil_container">

            <CardAccueil img={imgTest} description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." Titre="Chambres"/>
            <CardAccueil img={imgTest} description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur." Titre="Région"/>
            <CardAccueil img={imgTest} description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla elementum elit ante, a pellentesque elit fringilla iaculis. Vestibulum ut congue dui. Vestibulum sed aliquet quam. Pellentesque lectus nisi, mattis vitae erat pulvinar, tristique vulputate erat. In facilisis, elit eget efficitur eleifend, dolor ante ultricies dui, vitae pellentesque leo tellus quis metus. Sed lobortis est nec orci pulvinar faucibus sit amet sed velit. Nam laoreet nisi ut dolor bibendum porttitor. Sed in fringilla nunc." Titre="Etablisement"/>
        </div>
    )
}