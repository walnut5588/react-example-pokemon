import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
//import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Layout from './components/Layout';
import PokemonList from './components/pages/PokemonList';
import Home from './components/pages/Home';
import Footer from './components/pages/Footer';
import TypeList from './components/pages/TypeList';
import PokemonDetails from './components/pages/PokemonDetails';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <Router>
        <Layout />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/pokemons" component={PokemonList} />
          <Route exact path="/types" component={TypeList} />
          <Route exact path="/pokemon/:id" component={PokemonDetails} />
        </Switch>

        <Footer />
      </Router>
    );
  }
}

export default App;