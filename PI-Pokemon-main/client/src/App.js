import './App.css';
import {BrowserRouter, Route, Switch} from "react-router-dom"
import inicio from "./components/Inicio"
import Home from './components/Home';
import Creations from './components/Creations';
import Details from './components/Details';

function App() {
  return (
    <BrowserRouter>
    <Switch>
      <Route exact path = "/" component={inicio}/>
      <Route exact path = "/home" component={Home}/>
      <Route path = "/pokemons" component={Creations}/>
      <Route path = "/home/:id" component={Details}/>
    </Switch>
    <div className="App">
      <h1>Henry Pokemon</h1>
    </div>
    </BrowserRouter>
  );
}

export default App;
