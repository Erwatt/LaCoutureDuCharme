
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';


import Header from './Components/Header';
import Footer from './Components/Footer'
import Accueil from './Components/Accueil';

function App() {
  return (
    <div>
      <Header/>
      <BrowserRouter>
        
         
            <Link to={'/'}> Home </Link>
            <Link to={'/Footer'}>footer</Link>
            <Link to={'/Header'}>Header</Link>
         
          <hr />
          <Switch>
              <Route exact path='/' component={Accueil}/>
              <Route path='/Header' component={Header}/>
              <Route path='/Footer' component={Footer}/>
          </Switch>
       
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
