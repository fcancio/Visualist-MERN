import React from 'react';
import { Link } from 'react-router-dom';
import GratitudeLogic from '../../components/GratitudeLogic/GratitudeLogic';

const GratitudeLanding = (props) => {
    console.log(props)
    let gratitudeList = props.user ?
    <div className='Gratitude'>
        <h3>Gratitude</h3>
        <p>What are you grateful for today?</p>
        <GratitudeLogic 
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