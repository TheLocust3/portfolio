import React from 'react';

import Article from "../../../api/articles";
import { ConnectedState } from '../../containers/articles/NewContainer';
import Form from './Form'

class New extends React.Component<ConnectedState, any> {

    renderForm(): JSX.Element {
        return (
            <Form article={new Article()} />
        )
    }

    render(): JSX.Element {
        return (
            <div>
                <h1>New Article</h1>
                {this.renderForm()}
            </div>
        );
    }
}

export default New;
