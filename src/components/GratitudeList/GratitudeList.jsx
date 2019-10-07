import React, { Component } from 'react';
import styles from './GratitudeList.module.css';
import GratitudeForm from '../GratitudeForm/GratitudeForm';

class GratitudeList extends Component {
    state = {
        items: [{ first: "Family", second: "friends", third: "education"}]
    }

    // handleAddList ({ first, second, third }) => {
        
    // }

    render() {
        return (
            <h3>
                Gratitude
                <GratitudeForm />
            </h3>
            )
    }
}

export default GratitudeList;