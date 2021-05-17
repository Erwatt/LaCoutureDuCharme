import '../CSS/Room.css';
import logo_baignoire from '../Image/logo_baignoire.png';
import logo_bureau from '../Image/logo_bureau.png';
import logo_chaise_haute from '../Image/logo_chaise_haute.png';
import logo_douche from '../Image/logo_douche.png';
import logo_tv from '../Image/logo_tv.png';
import logo_wifi from '../Image/logo_wifi.png';
import fragole from '../Image/fragole.jpg';
import cocoon from '../Image/cocoon.jpg';
import scandinave from '../Image/scandinave.jpg';


function Room(){
    return (
        <div className="rooms">
            <div className="element_rooms">
                <div className="room">
                    <div className="element_room text_room">
                        <h1 className="Room_title">Fragole</h1>
                        <p className="Room_text">Coucou les amis</p>
                        <p className="Button">Plus d'infos</p>
                    </div>
                    <div className="element_room">
                        <div className="room_image">
                            <img src={fragole} alt="fragole" className="room_img"/>
                        </div>
                        <div className="room_logos">
                            <img src={logo_wifi} alt="logo wifi" className="logos"/>
                            <img src={logo_tv} alt="logo tv" className="logos"/>
                            <img src={logo_douche} alt="logo douche" className="logos"/>
                            <img src={logo_bureau} alt="logo bureau" className="logos"/>
                            <img src={logo_chaise_haute} alt="logo chaise haute" className="logos"/>
                        </div>
                    </div>
                </div>
                <div className="room">
                    <div className="element_room">
                        <div className="room_image">
                            <img src={cocoon} alt="cocoon" className="room_img"/>
                        </div>
                        <div className="room_logos">
                            <img src={logo_wifi} alt="logo wifi" className="logos"/>
                            <img src={logo_tv} alt="logo tv" className="logos"/>
                            <img src={logo_douche} alt="logo douche" className="logos"/>
                            <img src={logo_baignoire} alt="logo baignoire" className="logos"/>
                            <img src={logo_bureau} alt="logo bureau" className="logos"/>
                            <img src={logo_chaise_haute} alt="logo chaise haute" className="logos"/>
                        </div>
                    </div>
                    <div className="element_room text_room">
                        <h1 className="Room_title">Cocoon</h1>
                        <p className="Room_text">C'est David Lafarge Pokemon</p>
                        <p className="Button">Plus d'infos</p>
                    </div>
                </div>
                <div className="room">
                    <div className="element_room text_room">
                        <h1 className="Room_title">Scandinave</h1>
                        <p className="Room_text">J'éspère que vous allez bien</p>
                        <p className="Button">Plus d'infos</p>
                    </div>
                    <div className="element_room">
                        <div className="room_image">
                            <img src={scandinave} alt="scandinave" className="room_img"/>
                        </div>
                        <div className="room_logos">
                            <img src={logo_wifi} alt="logo wifi" className="logos"/>
                            <img src={logo_tv} alt="logo tv" className="logos"/>
                            <img src={logo_douche} alt="logo douche" className="logos"/>
                            <img src={logo_bureau} alt="logo bureau" className="logos"/>
                            <img src={logo_chaise_haute} alt="logo chaise haute" className="logos"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Room;