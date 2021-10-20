// import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import Routes from './components/routes';
import { BrowserRouter } from 'react-router-dom';
import { useState } from 'react';

function App() {

  const [isLoggedin, setIsLoggedin] = useState(false);
  return (
    <div className="App">
    <BrowserRouter>
      <Header isLoggedin={isLoggedin} logOut={()=>{setIsLoggedin(false)}}/>
      <Routes logIn={()=>{setIsLoggedin(true)}}/>
    </BrowserRouter>
    </div>
  );
}

export default App;
