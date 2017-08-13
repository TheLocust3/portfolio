import Redux from 'redux';
import { handleActions } from 'redux-actions';

import { AdminStoreState } from '../../types/store-state';
import { adminActions } from '../actions/admin-actions';

const defaultState: AdminStoreState = { isReady: false, admin: null };

const reducer: Redux.Reducer<AdminStoreState> = handleActions({
    [adminActions.admin.currentAdmin.request.toString()]: (state: AdminStoreState) => ({
        isReady: false
    }),
    [adminActions.admin.currentAdmin.receive.toString()]: (state: AdminStoreState, action: any) => ({
        isReady: true,
        admin: action.payload.admin
    }),
}, defaultState);

export default reducer;
