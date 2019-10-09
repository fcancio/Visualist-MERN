import React from 'react';
import { Link } from 'react-router-dom';
import GratitudeList from '../GratitudeList/GratitudeList';

const GratitudeLanding = (props) => {
    console.log('gratitude landing props', props)
    let gratitudeList = props.user ?
    <div className='Gratitude'>
        <h3>Gratitude</h3>
        <p>What are you grateful for today?</p>
        <GratitudeList 
            gratitude={props.gratitude}
            user={props.user}
        />
    </div>
    :
    <div>
        <h3>Gratitude</h3>
        <Link to='/gratitude' className='Gratitude-link'>Add some gratitude</Link>
    </div>;

  return (
    <div className='Gratitude-list'>
      {gratitudeList}
    </div>
  );
}


export default GratitudeLanding;