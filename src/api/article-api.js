import ApiBase from './api-base';

let ArticleApi = {
  getAll() {
    return ApiBase.get('/api/articles');
  },

  get(url) {
    return ApiBase.get(`/api/articles/${url}`);
  },

  create(title, body, image, url) {
    return ApiBase.post(
      '/api/articles',
      {
        title: title,
        body: body,
        image: image,
        url: url
      },
      ApiBase.authHeader()
    );
  },

  update(id, title, body, image, url) {
    return ApiBase.patch(
      `/api/articles/${id}`,
      {
        title: title,
        body: body,
        image: image,
        url: url
      },
      ApiBase.authHeader()
    );
  },

  destroy(id) {
    return ApiBase.delete(`/api/articles/${id}`, ApiBase.authHeader());
  }
};

export default ArticleApi;
