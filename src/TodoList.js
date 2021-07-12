import React, {Component} from "react"
import NewTodoForm from "./NewTodoForm";
import Todo from "./Todo";

class TodoList extends Component{
    constructor(props) {
        super(props);
        this.state = {
            todos: []
        }
        this.createTodo = this.createTodo.bind(this)
        this.removeTodo = this.removeTodo.bind(this)
        this.editTodo = this.editTodo.bind(this)
    }

    createTodo(todo){
        this.setState({
            todos: [...this.state.todos, todo]
        })
    }

    removeTodo(id){
        this.setState({
            todos: this.state.todos.filter(todo => (
                todo.id !== id
            ))
        })
    }

    editTodo(id, updatedName){
        // create a new variable equal to a copy of all the current todos
        // loop through these todos until you come across the desired to-do
        // return a new to-do with the same props as before with the name value equal to the new name
        const updatedTodos = this.state.todos.map(todo => {
            if (todo.id === id) {
                return {...todo, name: updatedName};
            }
            return todo;
        });
        this.setState({
            todos: updatedTodos
        })
    }

    render(){
        const todos = this.state.todos.map(todo => (
            <Todo
                key={todo.id}
                id={todo.id}
                name={todo.name}
                remove={() => this.removeTodo(todo.id)}
                edit={this.editTodo}
            />
        ))

        return(
            <div>
                <NewTodoForm create={this.createTodo}/>
                {todos}
            </div>
        )
    }
}

export default TodoList