import ApiBase from './api-base';

let AuthApi = {
    signIn(email, password) {
        return ApiBase.post('/auth/sign-in', {
            email: email,
            password: password
        });
    },

    signOut() {
        return ApiBase.delete('/auth/sign-out');
    },

    getCurrentUser() {
        return ApiBase.get('/users');
    }
};

export default AuthApi;
