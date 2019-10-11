import React, { Component } from 'react';
import GratitudeForm from '../../components/GratitudeForm/GratitudeForm';
import styles from '../GratitudePage/GratitudePage.module.css';

class GratitudePage extends Component {
    render() {
        return (
            <div className={styles.GratitudePage}>
            <GratitudeForm 
                history={this.props.history}
                user={this.props.user}
                updateGratitude={this.props.updateGratitude}
            />
            </div>
        )
    }
}



export default GratitudePage;