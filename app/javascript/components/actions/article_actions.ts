import { createActions } from 'redux-actions'

export const articleActions = createActions({
    ARTICLES: {
        COLLECTION: {
            RECEIVE: data => ({ data: data }),
        },
        MEMBER: {
            REQUEST: undefined,
            RECEIVE: data => ({ data: data }),
        }
    }
});
