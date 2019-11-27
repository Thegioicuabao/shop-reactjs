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

function App() {
  return (
    <Router>
      <div className="App">
       <Topmenu/>
      </div>
      <Switch>
        {/* <Route path="/">
          <Home />
        </Route> */}
        <Route path="/products">
          <Products />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
