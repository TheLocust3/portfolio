import React from 'react'
import ReactDOM from 'react-dom'

import ArticlesIndex from '../components/containers/articles/index'

class Base extends React.Component {

    render() {
        return (
            <ArticlesIndex />
        )
    }
}

document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(
        <Base />,
        document.body.appendChild(document.createElement('div')),
    )
});