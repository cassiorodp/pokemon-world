import './App.css';
import React,{ Component} from 'react'
import { Switch, Route, HashRouter } from 'react-router-dom';

import Header from './components/Header';
import Home from './pages/Home';
import Footer from './components/Footer';
import Pokedex from './pages/Pokedex';
import Search from './pages/Search';
import NoMatch from './pages/NoMatch';

class App extends Component {
  render() {
    return (
      <HashRouter>
        <Header />
        <Switch>
          <Route exact path='/' component={ Home }/>
          <Route path="/pokedex" component={ Pokedex } />
          <Route path="/search" component={ Search } />
          <Route path="*" component={ NoMatch } />
        </Switch>
        <Footer />
      </HashRouter>
    );
  }
}

export default App;
