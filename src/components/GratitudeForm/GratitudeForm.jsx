import React, { Component } from 'react';

class GratitudeForm extends Component {
    state = {
        first: '',
        second: '',
        third: ''

    }


    render() {
        return(
            <div>
                <h2>What are you grateful for today?</h2>
            </div>
        )
    }
}


export default GratitudeForm;