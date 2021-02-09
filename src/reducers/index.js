import {combineReducers} from "redux";

import posts from "./posts.js"

//imported in root/index.js
export default combineReducers({
    posts,
    //can also add users or other reducers in the future
})