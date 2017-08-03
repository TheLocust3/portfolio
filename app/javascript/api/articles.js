import $ from 'jquery'

export function getAllArticles() {
    return new Promise((resolve, reject) => {
        $.ajax('/api/v1/articles/', {
            type: 'get',
            success: resolve,
            error: reject
        });
    });
}

export function getArticle(id) {
    return new Promise((resolve, reject) => {
        $.ajax(`/api/v1/articles/${id}`, {
            type: 'get',
            success: resolve,
            error: reject
        });
    });
}

export function createArticle(name, text) {
    return new Promise((resolve, reject) => {
        $.ajax('/api/v1/articles/new', {
            type: 'get',
            data: { name: name, text: text },
            success: resolve,
            error: reject
        });
    });
}

export function updateArticle(id, name, text) {
    return new Promise((resolve, reject) => {
        $.ajax(`/api/v1/articles/${id}/edit`, {
            type: 'get',
            data: { name: name, text: text },
            success: resolve,
            error: reject
        });
    });
}
