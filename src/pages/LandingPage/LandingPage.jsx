import React from 'react';
import GratitudeLanding from '../../components/GratitudeLanding/GratitudeLanding';
import WellnessLanding from '../../components/WellnessLanding/WellnessLanding';
import MeetingsLanding from '../../components/MeetingsLanding/MeetingsLanding';
import TaskLanding from '../../components/TaskLanding/TaskLanding';
import MantraLanding from '../../components/MantraLanding/MantraLanding';
import ScheduleLanding from '../../components/ScheduleLanding/SchedulingLanding';
import styles from '../LandingPage/LandingPage.module.css';

const LandingPage = (props) => {
    console.log('landing page props', props)
        return (
            <>
            {/* <div className={styles.LandingPage}> */}
            <div className="display-lists">
                <div className="mantra"><MantraLanding /></div>
                <div className="list">
                    <GratitudeLanding 
                        history={props.history}
                        user={props.user}
                        gratitude={props.gratitude}
                        deleteGratitude={props.deleteGratitude}
                    /></div>
                <div className="list"><WellnessLanding /></div>
                <div className="list"><MeetingsLanding /></div>
                <div className="list"><TaskLanding /></div>
                <div className="schedule"><ScheduleLanding /></div>
            </div>
            {/* </div>  */}
            </>
            
        )
}



export default LandingPage;