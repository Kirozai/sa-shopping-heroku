import Product from "./pages/Product";
import Profile from "./pages/Profile";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import Wishlist from "./pages/Wishlist"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Success from "./pages/Success";
import NwSuccess from "./pages/NwSuccess"
import { useSelector } from "react-redux";
import Security from "./pages/Security";
import Orders from "./pages/Orders";

const App = () => {
  const user = useSelector((state) => state.user.currentUser);
  const confirmedPass = useSelector((state) => state.user.confirmedPassword);
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home type="normal"/>
        </Route>
        <Route exact path="/adminpanel">
          {()=> {
            window.location.replace('http://localhost:3001');
            return null;
          }}  
        </Route>
        <Route path="/men">
          <Home type="men"/>
        </Route>
        <Route path="/women">
          <Home type="women"/>
        </Route>
        <Route exact path="/profile">
          {user? <Profile /> : <Redirect to="/login" /> }
        </Route>
        <Route path="/profile/securitysettings">
          {user? confirmedPass ? <Security /> : <Redirect to="/profile" /> : <Redirect to="/login" /> }
        </Route>
        <Route path="/profile/orders">
          {user? <Orders /> : <Redirect to="/login" /> }
        </Route>
        <Route path="/newsletterregister">
          {user? <NwSuccess /> : <Redirect to="/login" /> }
        </Route>
        <Route path="/cart">
        {user? <Cart /> : <Redirect to="/login" /> }
        </Route>
        <Route path="/wishlist">
        {user? <Wishlist /> : <Redirect to="/login" /> }
        </Route>
        <Route path="/products/:category">
          <ProductList />
        </Route>
        <Route path="/product/:id">
          <Product />
        </Route>
        <Route path="/success">
          {user? <Success /> : <Redirect to="/" /> }
        </Route>
        <Route path="/login">{user ? <Redirect to="/" /> : <Login />}</Route>
        <Route path="/register">
          {user ? <Redirect to="/" /> : <Register />}
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
