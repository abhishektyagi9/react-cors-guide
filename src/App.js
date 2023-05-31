import { useEffect } from 'react';
import './App.css';
import NavBar from './NavBar';
import Home from './Home';
// define a  App function with a Div element
function App() {

  return (
    <div className="App">
    <NavBar />
    <div className="content">
    <Home />
      </div>
   
    </div>
  );

}
// export the App function
export default App;