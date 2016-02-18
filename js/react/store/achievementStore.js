import update from 'react-addons-update';
import { createStore, combineReducers  } from 'redux';
import * as ActionType from './actionTypes.js';

function achievements(state, action) {
    if (typeof state === 'undefined') {
        return [];
    }
    switch (action.type) {
        case ActionType.ACH_ADD:
            return update(state, {
                achievements: { $push: [{}] }
            });
        case ActionType.ACH_SET:
            return update(state, {
                achievements: {
                    [state.ui.selected]: {
                        [action.prop]: action.value
                    }
                }
            });
        default:
            return state
    }
}
function ui(state, action){
    if (typeof state === 'undefined') {
        return [];
    }
    if(action.type == ActionType.UI_ACH_SELECT){
        return update(state, {
            selected: {$set: action.id}
        })
    }
    return state;
}
export default createStore(combineReducers({
    achievements,
    ui
}));