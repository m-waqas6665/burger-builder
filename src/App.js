// import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import Routes from './components/routes';
import { BrowserRouter } from 'react-router-dom';
import { useState } from 'react';
// import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import Login from './components/login';
// import { Route, Switch } from "react-router";
// import { Button } from 'react-bootstrap';
// import Login from './components/login';
// import Burger from './components/burger';



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
