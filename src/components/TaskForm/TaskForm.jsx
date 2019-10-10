import React, { Component } from 'react';

class TaskForm extends Component {
    state = {
        first: '',
        second: '',
        third: '',
        personsArr: []
    };

    // method calls fetch function
    addList = (e) => {
        e.preventDefault()
        getUserTask(this.state.first, this.state.second, this.state.third, this.props.user).then(results => {
            console.log('Results from TaskForm', results)
            
            this.setState(results => ({
                first: '',
                second: '',
                third: '',
                personsArr: results            
            }));
            this.props.updateTask(results)
        })
        this.props.history.push('/')
    };

    handleChange = (event) => {
        this.setState({
            [event.target.name] : event.target.value
        })
        // props.updateTask(event.target.value)
    }

    // handleChangeTaskState = (event) => {
    //     this.props.updateTask(event.target.value)



    render() {
        return (
            <>
            <h5>What are your top tasks to accomplish today?</h5>
            {this.state.first}
            {this.state.second}
            {this.state.third}
            <form className="task-form" onSubmit={this.addList}>
                <div>
                    <div>
                        <label>1. </label>
                        <input name='first' value={this.state.first} onChange={this.handleChange} />
                    </div>
                    <div>
                        <label>2.</label>
                        <input name='second' value={this.state.second} onChange={this.handleChange} />
                    </div>
                    <div>
                        <label>3.</label>  
                        <input name='third' value={this.state.third} onChange={this.handleChange} />
                    </div>
                    <button onClick={this.addList}>></button>
                </div>
            </form>
            </>
        );
    }
}



export default TaskForm;


async function getUserTask(first, second, third, user) {
    const a = await fetch('/api/task/', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({ first, second, third, user })
    }) 
    const ajson = await a.json()
    return ajson
}