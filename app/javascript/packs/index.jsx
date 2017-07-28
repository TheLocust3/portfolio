import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import ArticlesIndex from '../components/containers/articles/index'

class Base extends React.Component {

    render() {
        return (
            <Router>
                <div>
                    <Route exact path="/articles" component={ArticlesIndex}/>
                </div>
            </Router>
        )
    }
}

document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(
        <Base />,
        document.body.appendChild(document.createElement('div')),
    )
});