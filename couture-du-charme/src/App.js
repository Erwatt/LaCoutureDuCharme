
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';

import Book from './Components/BookingPage'
import Header from './Components/Header';
import Footer from './Components/Footer'
import Home from './Components/Home';
import Header2 from './Components/Header2'

function App() {
  return (
    <div>
      <Header2/>
      {/* <BrowserRouter>
            <Link to={'/'}> Home </Link>
            <Link to={'/Footer'}>footer</Link>
            <Link to={'/Header'}>Header</Link>
            <Link to={'/Book'}>Book</Link>
         
          <hr />
          <Switch>
              <Route exact path='/' component={Home}/>
              <Route path='/Header' component={Header}/>
              <Route path='/Footer' component={Footer}/>
              <Route path='/Book' component={Book}/>
          </Switch>
       
      </BrowserRouter>
      <Footer/> */}
    </div>
  );
}

export default App;
