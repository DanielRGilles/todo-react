import React, { Component } from 'react';
import { getTodos, createTodos, updateTodos } from './utils.js';
import './App.css';
export default class Todos extends Component {
    state = {
        todos: [],
        todoItem: ''
    }
    componentDidMount = async() => {
        const todos = await getTodos(this.props.token)

        this.setState({ todos })
    }
    handleSubmit = async e => {
        e.preventDefault();

        await createTodos(this.state.todoItem, this.props.token)
        const todos = await getTodos(this.props.token)
        this.setState( { todos, todoItem:'' })
    }
    render() {
        return (
            <div className='cnt'>
                <form onSubmit={this.handleSubmit}>
                    <input
                    value={this.state.todoItem}
                    onChange={e => this.setState({ todoItem: e.target.value}) }
                    />
                    <button>Add an Item</button>
                </form>
                <ul>
                    {this.state.todos
                    .sort((a, b) => a.completed - b.completed)
                    .map(todoo => <li key={todoo.id} onClick={async() => {
                        
                            await updateTodos(todoo.id, !todoo.completed, this.props.token)
                        
                        const todos = await getTodos(this.props.token)
                        this.setState({ todos })
                    }}
                    className={todoo.completed ? 'todo complete' : 'todo incomplete'}>
                    {todoo.todo}
                    </li>)}
                    
                </ul>
            </div>
        )
    }

    // 
}
