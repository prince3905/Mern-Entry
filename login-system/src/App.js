import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import Homepage from './components/Homepage/Homepage';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import { BrowserRouter as Router,Switch,Route } from "react-router-dom";

function App() {
  const [ user,setLoginUser] = useState({})
  return (
    <div className="App">
   <Router>
        <Switch>
          <Route exact path="/">
            {
              user && user._id ? <Homepage setLoginUser ={setLoginUser}/> : <Login setLoginUser ={setLoginUser}/>
            }
          </Route>
          <Route path="/login">
            <Login setLoginUser ={setLoginUser}/>
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
