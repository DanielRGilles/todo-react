import React, { Component } from 'react'
import { signup } from './utils';

export default class Signup extends Component {
    state = {
        password: '',
        email: ''
    }

    handleSubmit = async e => {
        e.prevent.default();

        const { token } = await signup(this.state.email, this.state.password);

        this.props.handleTokenChange(token);

        this.props.history.push('/todos')
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Email <input type='email'value={this.state.email} onChange={(e) => this.setState({email: e.target.value})} />
                    </label>
                    <label>
                        Password <input value={this.state.password} onChange={(e) => this.setState({password: e.target.value})}/>
                    </label>
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}
