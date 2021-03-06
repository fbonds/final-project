import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import Home from './Home';
import Journal from './Journal';
import Nav from './Nav';
import CurrentUser from './CurrentUser';
import NewEntry from './NewEntry';

class App extends React.Component {
  render() {
    return (
      
      <div>
            <div className="App">
            <div className="top-container">
              <div className="top-left-col">
                <img className='logo' src="../logo.gif" alt='logo'></img>
              </div>
              <div className="top-right-col">
                <CurrentUser className='userName'/>
              </div>
            </div>
            <div className="body-container">
              <div className="left-col">
                <NewEntry />
            </div>
            <div className="right-col">
              <Router>
              <Nav />
                <Route exact path="/" component={Home} />
                <Route path="/journal" component={Journal} />
              </Router>
            </div>
            <div className="gutter">
              <span></span>
            </div>
          </div>
       </div>
      </div>
    )
  }
}

export default App;
