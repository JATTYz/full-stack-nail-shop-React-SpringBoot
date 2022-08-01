import './App.css';
import Home from './pages/Home';
import Product from './pages/Product';
import Register from './pages/Register';
import Login from './pages/Login';
import Booking from "./pages/Booking"
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Allbooking from './pages/Allbooking';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/products" exact component={Product}/>
        <Route path="/register" exact component={Register}/>
        <Route path="/login" exact component={Login} />
        <Route path="/booking" exact component={Booking} />
        <Route path="/all-booking" exact component={Allbooking} />
      </Switch>
    </Router>
  );
}

export default App;
 