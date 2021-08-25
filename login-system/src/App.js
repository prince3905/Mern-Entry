import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Homepage from './components/Homepage/Homepage';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import { BrowserRouter as Router,Switch,Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
   <Router>
        <Switch>
          <Route exact path="/">
            <Login/> 
          </Route>
          <Route path="/login">
            <Login/>
          </Route>
          <Route path="/register">
            <Register />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
