
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';
import Book from './BookingPage'
import Header from './Header';
import Footer from './Footer';
import Nothing from './Nothing';
import Home from './Home';
// import Header2 from './Header2';
import Room from './Room';
import RoomSelection from './RoomSelection';
import Wellness from './Wellness';

function App() {
  return (
    <div>
      <Header/>
          <Switch>
              <Route exact path='/' component={Home}/>
              <Route path='/Header' component={Header}/>
              <Route path='/Footer' component={Footer}/>
              <Route path='/Book' component={Book}/>
              <Route path='/Rooms' component={Room}/>
              <Route path="/Fragole"><RoomSelection room="fragole"/></Route>
              <Route path="/Scandinave"><RoomSelection room="scandinave"/></Route>
              <Route path="/Cocoon"><RoomSelection room="cocoon"/></Route>
              <Route path='/Wellness' component={Wellness}/>
              <Route path='/Nothing' component={Nothing}/>
          </Switch>
      <Footer/>
    </div>
  );
}

export default App;
