import React, { Component } from 'react'
import { login } from './utils.js';


export default class Login extends Component {
    state = {
        password: '',
        email: ''
    }

    handleSubmit = async e => {
        e.preventDefault();
        const { email, password } = this.state;
        const { token } = await login(email, password);
        
        this.props.handleTokenChange(token);
        
        this.props.history.push('/todos')
    }
    render() {
        const { email, password } = this.state;
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Email <input value={email} onChange={(e) => this.setState({email: e.target.value})} type='email'/>
                    </label>
                    <label>
                        Password <input value={password} onChange={(e) => this.setState({password: e.target.value})}/>
                    </label>
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}
