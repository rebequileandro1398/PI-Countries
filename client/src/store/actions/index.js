import axios from 'axios'




export default function getCountries() {
    return  async function(dispatch) {
      
       await axios.get('http://localhost:3001/countries')
       .then(data => {
        dispatch({
            type: 'GET_COUNTRY',
            payload: data
        })
       })        
    }
}

export function getCountrieByQuery(search) {
    return  async function(dispatch) {
      
        await axios.get(`http://localhost:3001/countries?name=${search}`)
        .then(data => {
            dispatch({
                type: 'GET_QUERY',
                payload: data
            })
        })
   }
}

export function DetailsCountry(id) {
    return async function(dispatch) {
        await axios.get(`http://localhost:3001/countries/${id}`)
        .then(data => {
            dispatch({
                type: 'DETAILS',
                payload: data
            })
        })
    }
}

export function SortByName(payload) {
    return {
        type: 'SORT_BY',
        payload
    }
}

export function ContinentsFilter(payload) {
    return {
        type: 'CONTINENTS',
        payload: payload
    }
}
export function GetAllActivities(){
    return async function(dispatch) {
        await axios.get('http://localhost:3001/activity')
        .then(data => {
            dispatch({
                type: 'GET_ALL_ACTIVITIES',
                payload: data
            })
        })
    }
}
export function GetActivity(id) {
    return async function(dispatch) {
        await axios.get(`http://localhost:3001/countries/${id}`)
        .then(data => {
            dispatch({
                type: 'GET_ACTIVITY',
                payload: data
            })
        })
    }
}
export function PostActivity(payload) {
    return async function() {
        const post =   await axios.post('http://localhost:3001/activity', payload)
        return post;
    }
}