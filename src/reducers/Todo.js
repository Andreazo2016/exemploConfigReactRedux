const initialState = [
    'Primeiro',
    'Segundo',
    'terceiro'
]
//state é o dados com valor atual e action é a ação
export default function Todo(state = initialState, action ){
    switch(action.type){
        case 'ADD_TODO':
            return [ ...state,action.payload.texto];
        default:
        return state;
    }

} 