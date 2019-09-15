import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createBrowserHistory } from 'history';
import { ApolloClient } from 'apollo-client';
import { setContext } from 'apollo-link-context';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { createUploadLink } from 'apollo-upload-client';

import { getCookie } from './helpers';
import reducer from './reducers/root-reducer';

export const store = createStore(reducer, applyMiddleware(thunkMiddleware));

export let history = createBrowserHistory();

export let colors = {
  textBlack: '#444',
  textBlackLighter: '#555',
  linkBlackHover: '#666',
  borderGray: '#9E9E9E',
  accent: '#6B4E71',
  accentRGB: { r: 107, g: 78, b: 113 }
};

export let MAX_MOBILE_WIDTH = '768px';
export let MAX_MOBILE_WIDTH_NUMBER = 768;

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      authorization: `Bearer ${getCookie('token')}`
    }
  };
});

export let PRODUCTION = false;

export let SERVER = PRODUCTION ? 'https://jakekinsella.com' : 'http://localhost:2001';

export const client = new ApolloClient({
  link: authLink.concat(createUploadLink({ uri: `${SERVER}/graphql` })),
  cache: new InMemoryCache()
});

export const IMAGES_URL = `https://jakekinsella-portfolio.s3.amazonaws.com/images/`;
