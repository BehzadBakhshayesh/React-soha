import axios from 'axios'

export function countries (data){
    return{
        type: 'CONTRIES',
        payload: data
    }
}

export function getCountries(){
    return (dispatch)=>{
        axios('https://restcountries.eu/rest/v2/all')
        .then(response => dispatch(countries(response.data)))
    } 
}
