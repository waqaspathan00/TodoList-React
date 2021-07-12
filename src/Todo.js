import React, {Component} from "react"
import "./Todo.css"

class Todo extends Component{
    constructor(props) {
        super(props);
        this.state = {
            editMode: false,
            name: this.props.name,
            completion: false,
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.changeEditMode = this.changeEditMode.bind(this)
        this.finishEditing = this.finishEditing.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.changeCompletion = this.changeCompletion.bind(this)
    }

    handleSubmit(e){
        e.preventDefault()
    }

    changeEditMode(e){
        this.setState({
            editMode: !this.state.editMode
        })
    }

    changeCompletion(e){
        this.setState({
            completion: !this.state.completion
        })
    }

    finishEditing(e){
        if (this.state.editMode){
            this.props.edit(this.props.id, this.state.name)
            this.changeEditMode()
        }
    }

    handleChange(e){
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render(){
        var todoContent
        if (this.state.editMode){
            todoContent = (
                <form className={"Todo"} onSubmit={this.handleSubmit}>
                    <input className={"Todo-name"} type={"text"} value={this.state.name} name={"name"} onChange={this.handleChange} />
                    <button className={"Todo-edit"} onClick={this.finishEditing}>Done</button>
                </form>
            )
        } else {
            const completionClass = this.state.completion ? " completed" : ""
            todoContent = (
                <form className={"Todo" + completionClass} onSubmit={this.handleSubmit} onClick={this.changeCompletion}>
                    <p className={"Todo-name"}>{this.props.name}</p>
                    <button className={"Todo-delete"} onClick={this.props.remove}><i className="fa fa-trash"/></button>
                    <button className={"Todo-edit"} onClick={this.changeEditMode}>Edit</button>
                </form>
            )
        }
        return todoContent
    }
}

export default Todo