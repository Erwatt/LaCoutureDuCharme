import '../CSS/Booking.css'
import testimg from '../Image/testimg.jpg'

import { useHistory } from 'react-router-dom';

export default function Book(){

    const history = useHistory();

    const handleNothing=()=>{
        history.push("/Nothing");
    }
    return(
        <div className="bookPage">
            <div className = "blank">
                <div className="container_bookPage">
                <div>
                    <h1 className="title_bookPage">Réservation</h1>

                    <div className="sum_up_book">
                        <img src={testimg} alt="mainlogo" className="roomImg"></img>
                        <div>
                            <h5>Description :</h5>
                            
                            Lorem ipsum dolor sit amet. Aut similique nisi et rerum possimus non porro iure. Ad blanditiis earum perferendis sunt est necessitatibus alias quo omnis incidunt eos minima tempora est excepturi unde ea dolorem reiciendis. Et quibusdam rerum et molestiae facere ea iste reprehenderit vel dolorem minus!
                            <h5>Prix :</h5>
                            999,79 €/j
                        </div>

                    </div>


                    <h2>Nom</h2>
                    <input></input>
                    <h2>Prénom</h2>
                    <input></input>
                    <h2>Email</h2>
                    <input></input>
                    <h2>Téléphone</h2>
                    <input></input>

                    
                </div>
                <button className="button_next" onClick={handleNothing}>Suivant</button>
                </div>
            </div>
        </div>
    )
}