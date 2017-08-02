import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import reducer from '../components/reducers/root_reducer'
import ArticlesIndex from '../components/containers/articles/Index'
import ArticlesNew from '../components/containers/articles/New'
import ArticlesEdit from '../components/containers/articles/Edit'
import ArticlesShow from '../components/containers/articles/Show'

let store = createStore(reducer);

class Base extends React.Component {

    render() {
        return (
            <Provider store={store}>
                <Router>
                    <div>
                        <Route exact path="/articles" component={ArticlesIndex}/>
                        <Route exact path="/articles/new" component={ArticlesNew}/>
                        <Route exact path="/articles/:id/edit" component={ArticlesEdit}/>
                        <Route exact path="/articles/:id" component={ArticlesShow}/>
                    </div>
                </Router>
            </Provider>
        )
    }
}

document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(
        <Base />,
        document.body.appendChild(document.createElement('div')),
    )
});