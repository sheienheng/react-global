
//应用规模越来越大时，建议使用单独的模块或者文件来存放action

import {CITY,USERNAME} from "./actionType";
function username(username) {
    return{
        type:USERNAME,
        username:username
    }
}

function city(city) {
    return{
        type:CITY,
        city:city
    }
}

export {city,username}