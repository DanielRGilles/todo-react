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

        const { token } = await signup(this.state.email, this.state.password);

        this.props.handleTokenChange(token);

        // this is the react router way of redirecting somebody
        this.props.history.push('/todos');
    }
    render() {
        
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Email: 
                        <input  value={this.state.email} onChange={(e) => this.setState({ email: e.target.value })} type='email'/>
                    </label>
                    <label>
                        Password: 
                        <input value={this.state.password} onChange={(e) => this.setState({ password: e.target.value })} />
                    </label>
                    <button>Sign Up</button>
                </form>
                <Link to='/login'>Go to Login </Link>
            </div>
        )
    }
}
