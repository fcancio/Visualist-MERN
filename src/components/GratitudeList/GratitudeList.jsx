import React from 'react';
import { Link } from 'react-router-dom';

// TODO: make that a map because if we dont we cant controll 

const GratitudeList = (props) => {
    // console.log('gratitude logic props', props)
    // console.log('User.gratitude from GratitudeList Component', props.user.gratitude)
    // let createdTime = new Date(item.createdAt).getTime() / 1000 // this will work
    
    console.log("GratitudeList", props.gratitude)
    return (
        props.gratitude.map(item =>{ 
            return (
                <div>
                    <li key={item._id}>
                        <p>{item.first}</p>
                        <p>{item.second}</p>
                        <p>{item.third}</p>
                        {/* <button onClick={()=>handleEdit(item._id)}></button> */}
                    </li>
                </div>
            //TODO: Move <li> block into <GratitudeList/> Component and pass props.gratitude and props.item through
            )
        })
    )
};    
        
export default GratitudeList;    




    // let userGrat = props.user.gratitude.length === 0 ? 
    //     <div>
    //         <Link to='/gratitude'>ADD A GRATITUDE</Link>
    //         <div>
    //             <li>{props.gratitude[0].first}</li>
    //             <li>{props.gratitude[0].second}</li>
    //             <li>{props.gratitude[0].third}</li>
    //         </div>  
    //     </div>
    //     :
    //     <div>
    //         <li>{props.user.gratitude[props.user.gratitude.length - 1].first}</li>
    //         <li>{props.user.gratitude[props.user.gratitude.length - 1].second}</li>
    //         <li>{props.user.gratitude[props.user.gratitude.length - 1].third}</li>
    //     </div> 
        // props.gratitude ?         
        // :         


