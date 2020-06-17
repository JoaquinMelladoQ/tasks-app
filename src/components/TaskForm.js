import React, { Component } from 'react';

export default class TaskForm extends Component {

    state = {
        title: '',
        description: ''
    }

    onSubmit = event => {
        this.props.addTask(this.state.title, this.state.description)
        event.preventDefault();
    }

    onChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render(){
        return (
            <form onSubmit={this.onSubmit}>
                <input type="text"
                       name="title"
                   placeholder="write a task"
                   onChange={this.onChange}
                   value={this.state.value}/>
                <br/>
                <br/>
                <textarea 
                   name="description"
                   placeholder="write a description"
                   onChange={this.onChange}
                   value={this.state.description}></textarea>
                <button type="submit">
                    Save a task
                </button>
            </form>
        )
    }

}