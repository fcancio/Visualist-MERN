import React from 'react';
import { Link } from 'react-router-dom';
import GratitudeList from '../GratitudeList/GratitudeList';

const GratitudeLanding = (props) => {
    // console.log('gratitude landing props', props)

    // const composedGratitude = props.gratitude.map(item =>{ 
    //     let createdTime = new Date(item.createdAt).getTime() / 1000 // this will work
    //     return (
    //       //TODO: Move <li> block into <GratitudeList/> Component and pass props.gratitude and props.item through
    //         <GratitudeList
                
    //         />
    //     )
    // })

               {/* //TODO render component <GratitudeList /> */}
        {/* <div className='Gratitude-list'>
            {gratitudeList}
        </div> */}
    console.log('props.gratitude', props.gratitude);
    return (
        props.gratitude.length !== 0 ?
            <div className='Gratitude-list'>
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