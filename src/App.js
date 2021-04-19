import { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import './App.css';
import Admin from "./components/Admin/Admin";
import Checkout from "./components/Checkout/Checkout";
import Header from './components/Header/Header';
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Orders from "./components/Orders/Orders";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  const [cart, setCart] = useState({});

  return (
    <UserContext.Provider value={{ loggedInUser, setLoggedInUser, cart, setCart }}>
      <Router>
        <Switch>
          <PrivateRoute path="/admin">
            <Admin />
          </PrivateRoute>
          <PrivateRoute path="/panel/:adminPanel">
            <Admin />
          </PrivateRoute>
          <Route path="/login">
            <Login />
          </Route>
          <div>
            <Header />
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/deals">
              <Home />
            </Route>
            <PrivateRoute path="/checkout">
              <Checkout />
            </PrivateRoute>
            <PrivateRoute path="/orders">
              <Orders />
            </PrivateRoute>
          </div>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
