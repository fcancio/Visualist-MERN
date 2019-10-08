import React, { Component } from 'react';
import GratitudeForm from '../../components/GratitudeForm/GratitudeForm';

class GratitudePage extends Component {
    render() {
        return (
            <GratitudeForm 
                history={this.props.history}
                user={this.props.user}
                updateGratitude={this.props.updateGratitude}
            />

        )
    }
}



export default GratitudePage;