import React from 'react';


// TODO: make that a map because if we dont we cant controll 

const GratitudeList = (props) => {
    // console.log('gratitude logic props', props)
    // console.log('User.gratitude from GratitudeList Component', props.user.gratitude)
    // let createdTime = new Date(item.createdAt).getTime() / 1000 // this will work
    
    const handleDeleteGrat = async gratId => {
        await deleteGratAPI(gratId).then
            console.log('deleteGratAPI(gratId):', gratId)
        const newUser = await getUserGrat(props.user._id);
            console.log('handleDeleteGrat newUser=props.user._id:', props.user._id)
        //TODO: pass handle function props that utilizes 'user' variable from app.js to pass id
        // this.setState({gratitude: user.gratitude})
        props.deleteGratitude(newUser)
    }


    console.log("GratitudeList", props.gratitude)
    return (
        props.gratitude.map(item =>{ 
            return (
                <div>
                    <li key={item._id}>
                        <p>{item.first}</p>
                        <p>{item.second}</p>
                        <p>{item.third}</p>
                        <button onClick={() => handleDeleteGrat(item._id)}>X</button>
                    </li>
                </div>
            //TODO: Move <li> block into <GratitudeList/> Component and pass props.gratitude and props.item through
            )
        })
    )
};    
        
export default GratitudeList;    

async function deleteGratAPI(gratId) {
    console.log('deleteGratAPI gratId in GratitudeList', gratId)
    return fetch(`/api/gratitude/${gratId}`, {
        method: 'DELETE',
        headers: {'content-type': 'application/json'},
        body: JSON.stringify({gratId})
    }).then(res => res.json())
}

async function getUserGrat(id) {
    const a = await fetch(`/api/gratitude/${id}`)
    const ajson = await a.json()
    await console.log(ajson)
    return ajson
}
  
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


