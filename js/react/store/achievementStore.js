import update from 'react-addons-update';
import { createStore, combineReducers  } from 'redux';
import * as ActionType from './actionTypes.js';

function achievements(state, action) {
    if (typeof state === 'undefined') {
        return [];
    }
    switch (action.type) {
                case ActionType.ACH_ADD:
            return update(state,{ $push: [{
                    slug:"newach",
                    name:"new achievement",
                    descrip:"a new achievement"
            }] });
        case ActionType.ACH_SET:
            return update(state,{ [state.ui.selected]: action.value });
        case ActionType.ACH_DEL:
            return update(state, {
                    $splice: [[action.id, 1]]
            });
        default:
            return state
    }
}
function ui(state, action){
    if (typeof state === 'undefined') {
        return [];
    }
    switch(action.type) {
        case ActionType.UI_ACH_SELECT:
            return update(state, {
                selected: {$set: action.id}
            });
    }
    return state;
}
export let store = createStore(combineReducers({
    achievements,
    ui
}));