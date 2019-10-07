import React, { Component } from 'react';

class GratitudeForm extends Component {
    state = {
        list: [{first: '', second: '', third: ''}],
        newList: {
            first: '',
            second: '',
            third: '',
        }
    };

    addList = () => {
        this.setState(state => ({
            list: [...state.list, state.newList],
        }));
    };

    handleOnChange = event => {
        this.setState({
            [event.target.name] : event.target.value
        })
    }


    render() {
        return (
            <>
            <h5>What are you grateful for today?</h5>
            {this.state.first}
            {this.state.second}
            {this.state.third}
            <form className="gratitude-form">
                <div>
                    <div>
                        <label>1. </label>
                        <input name='first' value={this.state.first} onChange={this.handleOnChange} />
                    </div>
                    <div>
                        <label>2.</label>
                        <input name='second' value={this.state.second} onChange={this.handleOnChange} />
                    </div>
                    <div>
                        <label>3.</label>  
                        <input name='third' value={this.state.third} onChange={this.handleOnChange} />
                    </div>
                    <button onClick={this.addList}>></button>
                </div>
            </form>
            </>
        );
    }
}


export default GratitudeForm;