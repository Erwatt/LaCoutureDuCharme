
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';
import Book from './BookingPage'
import Header from './Header';
import Footer from './Footer';
import Nothing from './Nothing';
import Home from './Home';
import Header2 from './Header2'

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
