import Header from './Header';
import '../CSS/App.css';
import Footer from './Footer'
import Room from './Room';
import RoomSelection from './RoomSelection';

function App() {
  return (
    <div>
      <Header/>
      <RoomSelection room="scandinave"/>
      {/* <Room/> */}
      <Footer/>
    </div>
  );
}

export default App;
