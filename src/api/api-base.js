import { getCookie } from '../helpers';

let ApiBase = {
    get(url, headers) {
        return this.promiseHandler(
            fetch(url, {
                method: 'GET',
                headers: headers
            })
        );
    },

    post(url, data, headers) {
        return this.promiseHandler(
            fetch(url, {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    ...headers
                },
                body: JSON.stringify(data)
            })
        );
    },

    patch(url, data, headers) {
        return this.promiseHandler(
            fetch(url, {
                method: 'PATCH',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    ...headers
                },
                body: JSON.stringify(data)
            })
        );
    },

    delete(url, headers) {
        return this.promiseHandler(
            fetch(url, {
                method: 'DELETE',
                headers: headers
            })
        );
    },

    authHeader() {
        return {
            Authorization: `Bearer ${getCookie('token')}`
        };
    },

    promiseHandler(promise) {
        return new Promise((resolve, reject) => {
            promise.then((response) => {
                response
                    .json()
                    .then((body) => {
                        if (response.status === 200) {
                            resolve({ status: response.status, body: body, raw: response });
                        } else {
                            reject({ status: response.status, body: body, raw: response });
                        }
                    })
                    .catch(() => {
                        reject({ status: response.status, body: {}, raw: response });
                    });
            });
        });
    }
};

export default ApiBase;
