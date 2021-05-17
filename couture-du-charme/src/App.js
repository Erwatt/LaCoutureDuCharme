
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';
import Book from './Components/BookingPage'
import Header from './Components/Header';
import Footer from './Components/Footer';
import Nothing from './Components/Nothing';
import Home from './Components/Home';
import Header2 from './Components/Header2'

function App() {
  return (
    <div>
      <Header/>
          <Switch>
              <Route exact path='/' component={Home}/>
              <Route path='/Header' component={Header}/>
              <Route path='/Footer' component={Footer}/>
              <Route path='/Book' component={Book}/>
              <Route path='/Nothing' component={Nothing}/>
          </Switch>
      <Footer/>
    </div>
  );
}

export default App;
