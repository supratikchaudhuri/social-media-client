import {combineReducers} from "redux";

import posts from "./posts.js"
import auth from "./auth.js"

//imported in root/index.js
export default combineReducers({
    posts,
    auth
})