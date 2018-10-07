export const SET_SOLID_NAVBAR = 'SET_SOLID_NAVBAR';
export const SET_TITLE = 'SET_TITLE';

export function setSolidNavbar(solid) {
    return {
        type: SET_SOLID_NAVBAR,
        data: solid
    };
}

export function setTitle(title) {
    return {
        type: SET_TITLE,
        data: title
    };
}
