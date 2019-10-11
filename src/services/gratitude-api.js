import tokenService from './tokenService';

const BASE_URL = '/api/gratitude';

export default  {
    getUserGrat,
    
}

// TODO: Refactor from GratitudeForm
async function getUserGrat(first, second, third, user) {
    const a = await fetch('/api/gratitude/', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({ first, second, third, user })
    }) 
    const ajson = await a.json()
    return ajson
}