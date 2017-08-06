import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Redux, { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';

import reducer from '../components/reducers/root-reducer';
import ArticlesIndex from '../components/containers/articles/IndexContainer';
import ArticlesNew from '../components/containers/articles/NewContainer';
import ArticlesEdit from '../components/containers/articles/EditContainer';
import ArticlesShow from '../components/containers/articles/ShowContainer';
import { StoreState } from "../types/store-state";

const store: Redux.Store<StoreState> = createStore<StoreState>(reducer, applyMiddleware(thunkMiddleware));

class Base extends React.Component {

    render(): JSX.Element {
        return (
            <Provider store={store}>
                <Router>
                    <div>
                        <Route exact path="/admin/articles/new" component={ArticlesNew}/>
                        <Route exact path="/admin/articles/:id/edit" component={ArticlesEdit}/>

                        <Route exact path="/articles" component={ArticlesIndex}/>
                        <Route exact path="/articles/:id" component={ArticlesShow}/>
                    </div>
                </Router>
            </Provider>
        );
    }
}

document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(
        <Base />,
        document.body.appendChild(document.createElement('div')),
    )
});