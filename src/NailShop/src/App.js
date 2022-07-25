import './App.css';
import Home from './pages/Home';
import Product from './pages/Product';
import Register from './pages/Register';
import Login from './pages/Login';
import Booking from "./pages/Booking"
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/products" exact component={Product}/>
        <Route path="/register" exact component={Register}/>
        <Route path="/login" exact component={Login} />
        <Route path="/booking" exact component={Booking} />
      </Switch>
    </Router>
  );
}

export default App;
 