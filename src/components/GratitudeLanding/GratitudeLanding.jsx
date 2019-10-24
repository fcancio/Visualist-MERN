import React from 'react';
import { Link } from 'react-router-dom';
import GratitudeList from '../GratitudeList/GratitudeList';
import styles from '../GratitudeLanding/GratitudeLanding.module.css';

const GratitudeLanding = (props) => {
    console.log('props.gratitude', props.gratitude);
    return (
        props.gratitude.length !== 0 ?
            <div className={styles.GratitudeLanding}>
                <h3>Gratitudes</h3>
                <p>What are you grateful for today?</p>
                <GratitudeList 
                    gratitude={props.gratitude}
                    user={props.user}
                    deleteGratitude={props.deleteGratitude}
                />
            </div>
        :
            <div>
                <h3>No Gratitudes</h3>
                <Link to='/gratitude' className='Gratitude-link'>Add some gratitude</Link>
            </div>
    );
};


export default GratitudeLanding;
