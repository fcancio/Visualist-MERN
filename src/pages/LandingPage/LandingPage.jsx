import React from 'react';
import GratitudeLanding from '../../components/GratitudeLanding/GratitudeLanding';
import WellnessLanding from '../../components/WellnessLanding/WellnessLanding';
import MeetingsLanding from '../../components/MeetingsLanding/MeetingsLanding';
import TaskLanding from '../../components/TaskLanding/TaskLanding';
import MantraLanding from '../../components/MantraLanding/MantraLanding';
import ScheduleLanding from '../../components/ScheduleLanding/SchedulingLanding';

const LandingPage = (props) => {
        return (
            <div className="display-lists">
                <div className="mantra"><MantraLanding /></div>
                <div className="list">
                    <GratitudeLanding 
                        history={props.history}
                        user={props.user}
                        gratitude={props.gratitude}
                    /></div>
                <div className="list"><WellnessLanding /></div>
                <div className="list"><MeetingsLanding /></div>
                <div className="list"><TaskLanding /></div>
                <div className="schedule"><ScheduleLanding /></div>
            </div>
        )
}



export default LandingPage;