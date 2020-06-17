import React, { Component } from 'react';
import PropTypes from 'prop-types';

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

Task.propTypes = {
    task: PropTypes.object.isRequired
}

const btnDelate = {
    fontSize: '18px',
    background: '#ea2027',
    color: '#fff',
    border: 'none',
    padding: '10px 15px',
    borderRadius: '50%',
    cursor: 'pointer'
}

export default Task;
