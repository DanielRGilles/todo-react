import React, { Component } from 'react'
import {
    BrowserRouter as Router, 
    Route, 
    Switch,
} from 'react-router-dom';
import Home from './Home.js';
import Signup from './Signup.js';
import Login from './Login.js';
import Todos from './Todos.js';
import { NavLink } from 'react-router-dom';

import './App.css'

export default class App extends Component {
    render() {
        return (
            <div>
              <header>
              <NavLink
              exact className='links'
              activeStyle={{fontSize:'1.5rem'}}
              to='/'>Home
              </NavLink>
              <NavLink
              exact className='links'
              activeStyle={{fontSize:'1.5rem'}}
              to='/Signup'>Signup
              </NavLink>
              <NavLink
              exact className='links'
              activeStyle={{fontSize:'1.5rem'}}
              to='/Login'>Login
              </NavLink>
              <NavLink
              exact className='links'
              activeStyle={{fontSize:'1.5rem'}}
              to='/Todos'>Todos
              </NavLink>
            </header>
                <Router>
                    <Switch>
                        <Route 
                            path="/" 
                            exact
                            render={(routerProps) => <Home {...routerProps} />} 
                        />
                        <Route 
                            path="/Signup" 
                            exact
                            render={(routerProps) => <Signup {...routerProps} />} 
                        />
                        <Route 
                            path="/Login" 
                            exact
                            render={(routerProps) => <Login {...routerProps} />} 
                        />
                        <Route 
                          path="/Todos/:myId" 
                          exact
                          render={(routerProps) => <Todos {...routerProps} />} 
                        />
                    </Switch>
                </Router>
            </div>
        )
    }
}