
const initialState = {
    countries: [],
    AuxCountries: [],
    activities: [],
    details: [],
    allactivities:[]
}


export default function reducer(state = initialState, action) {
    switch(action.type) {

        case 'GET_COUNTRY': 
            return {
                ...state,
                countries: action.payload.data,
                AuxCountries: action.payload.data
            }

        case 'GET_QUERY': 
            return {
                ...state,
                countries: action.payload.data
            }

        case 'DETAILS':
            return {
                ...state,
                details: action.payload.data
            }
            
        case 'SORT_BY':
            let data
            action.payload === 'max' ? data = state.AuxCountries.sort((a,b)=> a.population < b.population ? 1 : -1 ) :
            action.payload === 'min' ? data = state.AuxCountries.sort((a,b)=> a.population > b.population ? 1 : -1 ) :
            action.payload === 'asc' ? data = state.AuxCountries.sort((a,z)=> a > z ? 1 : -1 ) :
            action.payload === 'desc'? data = state.AuxCountries.sort((a,z)=> a < z ? 1 : -1 ) : 
            data = state.AuxCountries
            
            return {
                ...state,
                countries: data.map(e=>e)
            }

        case 'CONTINENTS':
        
            let filterContinents = action.payload === 'all' ? state.AuxCountries
            : state.AuxCountries.filter(e => e.continents === action.payload)

            return {
                ...state,
                countries: filterContinents
            }
        case 'GET_ACTIVITY':
            
            return {
                ...state,
                activities: action.payload.data[0].activities
            }

        case 'GET_ALL_ACTIVITIES':
            return {
                ...state,
                allactivities: action.payload.data  
            }

        default: 
            return state;
    }
}