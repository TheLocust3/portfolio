import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import reducer from '../components/reducers/root_reducer'
import ArticlesIndex from '../components/containers/articles/index'

let store = createStore(reducer);

class Base extends React.Component {

    render() {
        return (
            <Provider store={store}>
                <Router>
                    <div>
                        <Route exact path="/articles" component={ArticlesIndex}/>
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