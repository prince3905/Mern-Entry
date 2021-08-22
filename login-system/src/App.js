import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Homepage from './components/Homepage/Homepage';
import Login from './components/Login/Login';
import Register from './components/Register/Register';

function App() {
  return (
    <div className="App">
     {/* <Homepage/>   */}
     <Login/>
     <Register/>
    </div>
  );
}

export default App;
