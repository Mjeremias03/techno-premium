
import { GET_CELULARES,GET_CELULARESID,INFO_CELULARES } from "./actionTypes"

const initialState= {
    celulares:[],
    detail:[]
}
export default function reducer(state=initialState, action){
    switch(action.type){
        case GET_CELULARES:
            return {
                ...state,
           
            };
            case INFO_CELULARES:

                return{
                    ...state,
                    detail: action.payload
                   
                }
                case GET_CELULARESID:
                    return{
                        ...state,
                        celulares:action.payload
                    }
                default:
                    return{
                        ...state
                    }
    }
}