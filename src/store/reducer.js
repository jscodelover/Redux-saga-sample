import * as actionCreator from './actions';

export default function reducer(state = {display : [] }, action){
    switch(action.type){
        case actionCreator.RES_HELLO : return{
            ...state,
            display : [...action.text]
        }
        default : return state
    }
}