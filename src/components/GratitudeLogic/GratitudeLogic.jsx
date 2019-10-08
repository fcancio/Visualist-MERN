import React from 'react';


const GratitudeLogic = (props) => {
    return (
        // props.gratitude ? 
        //     <div>
        //         <li>{props.gratitude[0].first}</li>
        //         <li>{props.gratitude[0].second}</li>
        //         <li>{props.gratitude[0].third}</li>
        //     </div>
        
        // :
            <div>
                <li>{props.user.gratitude[props.user.gratitude.length - 1].first}</li>
                <li>{props.user.gratitude[props.user.gratitude.length - 1].second}</li>
                <li>{props.user.gratitude[props.user.gratitude.length - 1].third}</li>
            </div>         
    )
};

export default GratitudeLogic;