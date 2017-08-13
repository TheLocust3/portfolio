import Redux from 'redux';
import { createActions } from 'redux-actions';

import { StoreState } from "../../types/store-state";

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

            // Article.get(id).then((article: Article) => {
            //     dispatch(adminActions.admin.currentAdmin.receive(admin));
            // })
        }
    }
};
