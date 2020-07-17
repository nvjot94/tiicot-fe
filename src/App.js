import React,{useEffect,useState} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import "materialize-css/dist/css/materialize.css";
import M from "materialize-css/dist/js/materialize.min.js";
import './App.css';
import Home from './components/Home';
import axios from 'axios';
 import Navbar from './components/Navbar';
 import Search from './components/Search';
function App() {
  const url = 'https://tiicot.herokuapp.com/users';
  const [users,setUsers]=useState([]);
  useEffect(()=>
  {
    M.AutoInit();
    axios.get(url)
          .then(function (response) {
            console.log(response.data);
            setUsers(response.data);
          })
          .catch(function (error) {
            console.log(error);
          });
  },[]);
  return (
    <Router>
      <Navbar />
    <div className="container">
    
    <Switch>
    <Route exact path='/' render={(props) => (
                <Home {...props} users={users}
                />
              )}></Route>
                <Route exact path='/search' render={(props) => (
                <Search {...props} users={users}
                />
              )}></Route>
                </Switch>
    </div>
    </Router>
  );
}

export default App;
