import * as GlobalActions from '../actions/global-actions';

const initialState = {
    solidNavbar: false
};

export function globalReducer(state = initialState, action) {
    switch (action.type) {
        case GlobalActions.SET_SOLID_NAVBAR:
            return Object.assign({}, state, {
                solidNavbar: action.data
            });
        case GlobalActions.SET_TITLE:
            document.title = `Jake Kinsella - ${action.data}`;

            return Object.assign({}, state, {
                title: action.data
            });
        default:
            return state;
    }
}
