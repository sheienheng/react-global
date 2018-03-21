
import {CITY,USERNAME} from "./actionType";

//combinReducers 是一个方法 作用是可以把多个reducer合并成一个
import {combineReducers} from 'redux'

function city ( state = '',action) {
    switch (action.type){
        case CITY:
            return  action.city
            break;
        default:
            return state
    }
}
function username(state = '',action) {
    switch (action.type){
        case USERNAME:
            return  action.username
            break;
        default:
            return state
    }
}
export default combineReducers({city,username})