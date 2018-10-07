let ApiBase = {
    get(url) {
        return this.promiseHandler(
            fetch(url, {
                method: 'GET'
            })
        );
    },

    post(url, data) {
        return this.promiseHandler(
            fetch(url, {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
        );
    },

    patch(url, data) {
        return this.promiseHandler(
            fetch(url, {
                method: 'PATCH',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
        );
    },

    delete(url) {
        return this.promiseHandler(
            fetch(url, {
                method: 'DELETE'
            })
        );
    },

    promiseHandler(promise) {
        return new Promise((resolve, reject) => {
            promise.then((response) => {
                response.json().then((body) => {
                    if (response.status === 200) {
                        resolve({ status: response.status, body: body, raw: response });
                    } else {
                        reject({ status: response.status, body: body, raw: response });
                    }
                });
            });
        });
    }
};

export default ApiBase;
