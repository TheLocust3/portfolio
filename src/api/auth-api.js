import ApiBase from './api-base';
import { setCookie } from '../helpers';

let AuthApi = {
    signIn(email, password) {
        return ApiBase.post('/auth/sign-in', {
            email: email,
            password: password
        }).then((response) => {
            setCookie('token', response.body.token, 1);

            return response;
        });
    },

    signOut() {
        setCookie('token', '', 1);
    },

    getCurrentUser() {
        return ApiBase.get('/users', ApiBase.authHeader());
    }
};

export default AuthApi;
