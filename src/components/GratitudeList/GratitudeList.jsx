import React from 'react';
import { Link } from 'react-router-dom';


const GratitudeList = (props) => {
    console.log('gratitude logic props', props)
    console.log('User.gratitude from GratitudeList Component', props.user.gratitude)
    let userGrat = props.user.gratitude.length === 0 ? 
        <div>
            <Link to='/gratitude'>ADD A GRATITUDE</Link>
            <div>
                <li>{props.gratitude[0].first}</li>
                <li>{props.gratitude[0].second}</li>
                <li>{props.gratitude[0].third}</li>
            </div>  
        </div>
        :
        <div>
            <li>{props.user.gratitude[props.user.gratitude.length - 1].first}</li>
            <li>{props.user.gratitude[props.user.gratitude.length - 1].second}</li>
            <li>{props.user.gratitude[props.user.gratitude.length - 1].third}</li>
        </div> 
    return (
        <div>
            {userGrat}
        </div>
        
        // props.gratitude ? 

        
        // :         
    )
};

export default GratitudeList;