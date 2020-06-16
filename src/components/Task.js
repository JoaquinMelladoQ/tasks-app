import React, { Component } from 'react';

class Task extends Component {

    styleCompleted() {
        return {
            fontSize: '20px',
            color: this.props.task.done ? 'gray' : 'black',
            textDecoration: this.props.task.done ? 'line-through' : 'none'
        }
    }


    render() {
        const {task} = this.props;

       return <p style={this.styleCompleted()}>
           {task.title} - 
           {task.description} -
           {task.done} -
           {task.id} 
           <input type="checkbox"/>
           <button style={btnDelate}>
               x
           </button>
       </p>
    }
} 

export default Task;

const btnDelate = {
    fontSize: '18px',
    background: '#ea2027',
    color: '#fff',
    border: 'none',
    padding: '10px 15px',
    borderRadius: '50%',
    cursor: 'pointer'
}