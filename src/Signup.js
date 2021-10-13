import React, { Component } from 'react'
import { signup } from './utils.js';
import { Link } from 'react-router-dom';

export default class Signup extends Component {
    state = {
        password: '',
        email: ''
    }

    handleSubmit = async e => {
        e.preventDefault();
        const { email, password } = this.state;
        const { token } = await signup(email, password);
        
        this.props.handleTokenChange(token);
        this.props.history.push('/todos');
    }
    render() {
        const { email, password } = this.state;
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Email: 
                        <input  value={email} onChange={(e) => this.setState({ email: e.target.value })} type='email'/>
                    </label>
                    <label>
                        Password: 
                        <input value={password} onChange={(e) => this.setState({ password: e.target.value })} />
                    </label>
                    <button>Sign Up</button>
                </form>
                <Link to='/login'>Go to Login </Link>
            </div>
        )
    }
}
