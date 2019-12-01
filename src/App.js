import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Topmenu from './components/Topmenu'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Products from './pages/products'
import { CartProvider } from './contexts/cart'
function App() {
  return (
    <CartProvider>
      <Router>
        <div className="App">
        <Topmenu/>
        </div>
        <Switch>
          <Route path="/products">
            <Products />
          </Route>
        </Switch>
      </Router>
    </CartProvider>
  );
}

export default App;
