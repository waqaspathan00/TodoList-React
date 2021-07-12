import React, {Component} from "react"
import "./NewTodoForm.css"
import uuid from "uuid/v4"

class NewTodoForm extends Component{
    constructor(props) {
        super(props);
        this.state = {
            name: "",
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(e){
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit(e){
        e.preventDefault()
        const newTodo = {...this.state, id: uuid()}
        this.props.create(newTodo)
        this.setState({
            name: ""
        })
    }

    render(){
        return(
            <div>
                <h2>Enter a new Todo</h2>
                <form onSubmit={this.handleSubmit}>
                    <input className={"NewTodoForm-txt"} name={"name"} type={"text"} value={this.state.name} onChange={this.handleChange}/>
                    <button className={"NewTodoForm-btn"}>Add Todo</button>
                </form>
            </div>
        )
    }
}

export default NewTodoForm