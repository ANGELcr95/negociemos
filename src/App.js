import './App.css';
import HomePage from './components/Homepage';
import {
  HashRouter as  Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom"
import Products from './components/Products';
import BuyProduct from './components/HomePage/Banner/BuyProduct';
// import AuthProvider from './Auth/AuthProvider';
import {Provider} from 'react-redux'
import generateStore from './redux/store';
import Laboratorie from './components/Laboratorie';


function App() {

  const store = generateStore()

  return (
    <div className="App">
      <Router>
        <Provider store={store}>
          <Switch>
            <HomePage exact path="/"/>
            <BuyProduct exact path="/compraproducto"/>
            <Products exact path="/productos"/>
            <Laboratorie exact path="/laboratorio"/>
            </Switch>
        </Provider>
      </Router>
    </div>
  );
}

export default App;
