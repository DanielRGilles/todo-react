import React, { Component } from 'react';
import { getTodos, createTodos, updateTodos } from './utils.js';
import './App.css';
export default class Todos extends Component {
    state = {
        todos: [],
        todoItem: ''
    }
    componentDidMount = async() => {
        const { token } = this.props;
        const todos = await getTodos(token)

        this.setState({ todos })
    }
    handleSubmit = async e => {
        e.preventDefault();
        const { token } = this.props;
        const { todoItem } = this.state;
        await createTodos(todoItem, token)
        const todos = await getTodos(token)
        this.setState( { todos, todoItem:'' })
    }
    render() {
        const { todoItem, todos } = this.state;
        const { token } = this.props;
        return (
            <div className='cnt'>
                <form onSubmit={this.handleSubmit}>
                    <input
                    value={todoItem}
                    onChange={e => this.setState({ todoItem: e.target.value}) }
                    />
                    <button>Add an Item</button>
                </form>
                <ul>
                    {todos
                    .sort((a, b) => a.completed - b.completed)
                    .map(({ todo, id, completed }) => <li key={id} onClick={async() => {
                        
                            await updateTodos(id, !completed, token)
                        
                        const todos = await getTodos(token)
                        this.setState({ todos })
                    }}
                    className={completed ? 'todo complete' : 'todo incomplete'}>
                    {todo}
                    </li>)}
                    
                </ul>
            </div>
        )
    }

    // 
}
