import React, { Component } from 'react'
import {
    BrowserRouter as Router, 
    Route, 
    Switch,
    NavLink,
    Redirect
} from 'react-router-dom';
import Home from './Home.js';
import Signup from './Signup.js';
import Login from './Login.js';
import Todos from './Todos.js';
import './App.css'

const TOKEN_KEY = 'TOKEN'

export default class App extends Component {
  state = {
    token: localStorage.getItem(TOKEN_KEY) || ''
}

  handleTokenChange = token => {
    localStorage.setItem(TOKEN_KEY, token)
    this.setState({ token: token })
    console.log(token)
}
  logout = () => {
  localStorage.clear()
  this.setState({ token: '' })
}
    render() {
        return (
            <div>
                <Router> 
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
              {this.state.token && <button onClick={this.logout}>Logout</button>}
            </header>
                    <Switch>
                        <Route 
                            path="/" 
                            exact
                            render={(routerProps) => <Home {...routerProps} />} 
                        />
                        <Route 
                            path="/signup" 
                            exact
                            render={(routerProps) => <Signup handleTokenChange={this.handleTokenChange} {...routerProps} />} 
                        />
                        <Route 
                            path="/login" 
                            exact
                            render={(routerProps) => <Login {...routerProps} />} 
                        />
                        <Route 
                          path="/todos" 
                          exact
                          render={(routerProps) => this.state.token
                                  ? <Todos token={this.state.token} {...routerProps} />
                                  : <Redirect to='/signup' /> } 
                        />
                    </Switch>
                </Router>
            </div>
        )
    }
}