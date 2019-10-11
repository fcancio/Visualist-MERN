import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../GratitudeForm/GratitudeForm.css';

class GratitudeForm extends Component {
    state = {
        first: '',
        second: '',
        third: '',
        personsArr: []
    };

    // method calls fetch function
    addList = (e) => {
        e.preventDefault()
        getUserGrat(this.state.first, this.state.second, this.state.third, this.props.user).then(results => {
            console.log('Results from GratitudeForm', results)
            
            this.setState(results => ({
                first: '',
                second: '',
                third: '',
                personsArr: results            
            }));
            this.props.updateGratitude(results)
        })
        this.props.history.push('/')
    };

    handleChange = (event) => {
        this.setState({
            [event.target.name] : event.target.value
        })
        // props.updateGratitude(event.target.value)
    }

    // handleChangeGratState = (event) => {
    //     this.props.updateGratitude(event.target.value)



    render() {
        return (
            <>
            <h1>What are you grateful for today?</h1>
            <form className="gratitude-form" onSubmit={this.addList}>
                <div>
                    <div>
                        <label>one.    </label>
                        <input name='first' value={this.state.first} onChange={this.handleChange} />
                    </div>
                    <div>
                        <label>two.    </label>
                        <input name='second' value={this.state.second} onChange={this.handleChange} />
                    </div>
                    <div>
                        <label>three.</label>  
                        <input name='third' value={this.state.third} onChange={this.handleChange} />
                    </div>
                    <button onClick={this.addList}>submit</button>
                </div>
            </form>
                    <Link to='/'>Cancel</Link>
            </>
        );
    }
}



export default GratitudeForm;


async function getUserGrat(first, second, third, user) {
    const a = await fetch('/api/gratitude', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({ first, second, third, user })
    }) 
    const ajson = await a.json()
    return ajson
}