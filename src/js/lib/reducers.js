import { DO_SEARCH, SEARCH_DONE } from "./actions";
import { combineReducers } from "../../../../../Library/Caches/typescript/2.6/node_modules/redux";

const initialState = {
    searchResults: []
}

export function search(state = initialState, action) {
    switch (action.type) {
        case DO_SEARCH:
            
        break;
        case SEARCH_DONE:
        break;
        default:
            return state;
        break;
    }
}

export default combineReducers({ search })