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

const TOKEN = 'TOKEN'

export default class App extends Component {
  state = {
    token: localStorage.getItem(TOKEN) || ''
}

  handleTokenChange = async(token) => {
    localStorage.setItem(TOKEN, token)
    this.setState({ token: token })
    
}
  logout = () => {
  localStorage.clear()
  this.setState({ token: '' })
}
    render() {
      const { token } = this.state;
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
              {token && <button onClick={this.logout}>Logout</button>}
            </header>
                    <Switch>
                        <Route 
                            path="/" 
                            exact
                            render={(routerProps) => <Home {...routerProps} />} 
                        />
                        <Route 
                            path="/Signup" 
                            exact
                            render={(routerProps) => <Signup handleTokenChange={this.handleTokenChange} {...routerProps} />} 
                        />
                        <Route 
                            path="/Login" 
                            exact
                            render={(routerProps) => <Login handleTokenChange={this.handleTokenChange} {...routerProps} />} 
                        />
                        <Route 
                          path="/Todos" 
                          exact
                          render={(routerProps) => token
                                  ? <Todos token={token} {...routerProps} />
                                  : <Redirect to='/Signup' /> } 
                        />
                    </Switch>
                </Router>
            </div>
        )
    }
}