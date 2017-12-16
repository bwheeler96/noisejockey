import { DO_SEARCH, SEARCH_DONE, FOCUS_SEARCH } from "./actions";
import { combineReducers } from "../../../../../Library/Caches/typescript/2.6/node_modules/redux";

const initialState = {
    searchResults: [],
    searchFocused: false
}

export function search(state = initialState, action) {
    switch (action.type) {
        case DO_SEARCH:
            return state
        break;
        case SEARCH_DONE:
            return Object.assign({}, state, {
                searchResults: action.response,
                searchFocused: false
            })
        break;
        case FOCUS_SEARCH:
            return Object.assign({}, state, {
                searchFocused: true
            })
        default:
            return state;
    }
}

export default combineReducers({ search })