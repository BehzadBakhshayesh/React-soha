export function countries (state=[], action){
    switch (action.type){
        case 'CONTRIES' : return action.payload
        default : return state
    }
}
