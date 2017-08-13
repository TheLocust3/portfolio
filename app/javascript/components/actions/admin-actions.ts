import Redux from 'redux';
import { createActions } from 'redux-actions';

import { StoreState } from "../../types/store-state";
import Admin from "../../api/admin";

export const adminActions = createActions({
    ADMIN: {
        CURRENT_ADMIN: {
            REQUEST: undefined,
            RECEIVE: (admin: any) => ({ admin: admin })
        },
        LOGOUT: undefined,
        LOGIN: undefined
    }
});

export const adminRequests = {
    getCurrentAdmin() {
        return (dispatch: Redux.Dispatch<StoreState>) => {
            dispatch(adminActions.admin.currentAdmin.request);

            Admin.currentAdmin().then((admin: Admin) => {
                dispatch(adminActions.admin.currentAdmin.receive(admin));
            })
        }
    }
};
