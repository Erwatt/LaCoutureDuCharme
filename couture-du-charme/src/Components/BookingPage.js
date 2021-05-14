import '../CSS/Booking.css'
import testimg from '../Image/testimg.jpg'

export default function Book(){
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
                            10000000 €
                        </div>

                    </div>


                    <h1>Nom</h1>
                    <input></input>
                    <h1>Prénom</h1>
                    <input></input>
                    <h1>Email</h1>
                    <input></input>
                    <h1>Téléphone</h1>
                    <input></input>

                    
                </div>
                <button className="button_next">Suivant</button>
                </div>
            </div>
        </div>
    )
}